import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags } from "@lezer/highlight";

export const modernColorSyntax = HighlightStyle.define([
  { tag: tags.keyword, color: "#c792ea", fontWeight: "600" },
  { tag: tags.string, color: "#a3be8c" },
  { tag: tags.comment, color: "#5c6370", fontStyle: "italic" },
  { tag: tags.variableName, color: "#e5e5e5" },
  { tag: tags.function(tags.variableName), color: "#82aaff" },
  { tag: tags.number, color: "#f78c6c" },
  { tag: tags.operator, color: "#bbbbbb" },
  { tag: tags.typeName, color: "#89ddff" },
  { tag: tags.bool, color: "#ffcb6b" },
]);

export const modernBWTheme = EditorView.theme({
  "&": {
    border: "2px solid #f9f9f9",
    backgroundColor: "#0f0f10",
    color: "#e8e8e8",
    height: "100%",
    borderRadius: "12px 0 0 12px",
    overflow: "hidden",
  },

  ".cm-content": {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: "14px",
    caretColor: "#ffffff",
  },

  ".cm-scroller": {
    overflow: "auto",
    borderRadius: "12px 0 0 12px",
  },

  ".cm-cursor": {
    borderLeft: "2px solid #ffffff",
  },

  ".cm-selectionBackground, ::selection": {
    backgroundColor: "#2a2a2d",
  },

  ".cm-gutters": {
    backgroundColor: "#0f0f10",
    color: "#6e6e6e",
    border: "none",
  },

  ".cm-activeLine": {
    backgroundColor: "#1a1a1c",
  },

  ".cm-activeLineGutter": {
    backgroundColor: "#1a1a1c",
  },

  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 10px",
  },

  ".cm-focused": {
    outline: "none",
  },
});

export function createEditor(parent: HTMLElement) {
  return new EditorView({
    doc: "// TCC ready\nfunction test() {\n  for (let i = 0; i < n; i++) {}\n}",
    parent,
    extensions: [
      basicSetup,
      javascript(),
      syntaxHighlighting(modernColorSyntax),
      modernBWTheme,
    ],
  });
}
