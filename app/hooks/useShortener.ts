import { FormEvent, useEffect, useState } from "react";
import { Result } from "../types";
import Shorter from "../api/shorter";

const useShortener = () => {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState<Result[]>([]);
  const [error, setError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  /*   */
  const fetchLinks = async () => {
    const link = JSON.parse(localStorage.getItem("links") || "[]");
    if (link) setLinks(link);
  };

  /* API Navigator clipboard Property */
  const handleCopyClick = async (index: number) => {
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        await navigator.clipboard.writeText(links[index].full_short_link);
      setCopiedIndex(index);
      setTimeout(() => {
        setCopiedIndex(null);
      }, 5000);
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  };

  /* API errors */
  const errors: { [key: number]: string } = {
    1: "No URL specified",
    2: "Invalid URL",
    3: "Rate limit reached. Wait a second and try again",
    4: "IP-Address has been blocked because of violating our terms of service",
    5: "short code (slug) already in use",
    6: "Unknown error",
    7: "No code specified ('code' parameter is empty)",
    8: "Invalid code submitted (code not found/there is no such short-link)",
    9: "Missing required parameters",
    10: "Trying to shorten a disallowed Link. More information on disallowed links",
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Shorter(url).then((res) => {
      if (!res.ok) {
        setError(errors[res.error_code]);
      }
      const { result } = res;
      if (result) {
        setLinks([result, ...links]);
        localStorage.setItem("links", JSON.stringify([result, ...links]));
        setError("");
        setUrl("");
      }
    });
  };
  return {
    handleCopyClick,
    handleSubmit,
    setUrl,
    error,
    copiedIndex,
    links,
    url,
  };
};

export default useShortener;
