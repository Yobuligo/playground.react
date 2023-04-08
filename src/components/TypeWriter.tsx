import { useCallback, useEffect, useState } from "react";
import { PortionTypeWriter } from "../services/PortionTypeWriter";
import styles from "./TypeWriter.module.css";

const transformText = (text: string): string => {
  let result = "";
  for (const letter of text) {
    if (!result) {
      result += letter;
    } else {
      result += ` ${letter}`;
    }
  }
  return result;
};

const TypeWriter: React.FC<{ text: string }> = (props) => {
  const [printedText, setPrintedText] = useState("");

  const runTypeWriter = useCallback((typeWriter: PortionTypeWriter) => {
    setTimeout(() => {
      if (typeWriter.hasNext) {
        setPrintedText(() => transformText(typeWriter.next()));
        runTypeWriter(typeWriter);
      }
    }, 500);
  }, []);

  useEffect(() => {
    setPrintedText("");
    const typeWriter = new PortionTypeWriter(props.text);
    runTypeWriter(typeWriter);
  }, [props.text, runTypeWriter]);

  return <div className={styles.typeWriter}>{printedText}</div>;
};

export default TypeWriter;
