import { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }], // Header levels
    ["bold", "italic", "underline", "strike"], // Text styles
    [{ list: "ordered" }, { list: "bullet" }], // Lists
    [{ indent: "-1" }, { indent: "+1" }], // Indentation
    [{ script: "sub" }, { script: "super" }], // Subscript/Superscript
    [{ direction: "rtl" }], // Right-to-left text
    [{ size: ["small", false, "large", "huge"] }], // Font sizes
    [{ color: [] }, { background: [] }], // Text color and background color
    [{ font: [] }], // Font family selection
    [{ align: [] }], // Text alignment (left, center, right, justify)
    ["link", "image", "video"], // Insert options
    ["clean"], // Remove formatting
  ],
};

function QuillEditor({ html, onHtmlChange }: { html?: string, onHtmlChange?: (val: string) => void }) {
  const [content, setContent] = useState(html);
  const quillRef = useRef<ReactQuill | null>(null);

  useEffect(() => {
    if (quillRef && typeof quillRef.current?.getEditor !== 'function') return;
    if (quillRef.current) {
      console.log("Quill instance:", quillRef.current);
    }
  }, []);

  useEffect(() => {
    if (html !== content) setContent(html);
  }, [html])

  const handleHtmlUpdate = (val: string) => {
    if (onHtmlChange) onHtmlChange(val);
    setContent(val);
  }

  return <ReactQuill
    ref={quillRef}
    data-testid="quill-editor"
    theme="snow"
    value={content}
    modules={modules}
    onChange={handleHtmlUpdate} />;
}

export default QuillEditor;
