import path from "path";
import { Parser, Language } from "web-tree-sitter";
import getResourcePath from "./getResourcePath";

export default class TypeScriptParser {
  private static instance: TypeScriptParser;
  private tsParser: Parser | null = null;

  private constructor() {}

  public static getInstance(): TypeScriptParser {
    if (!TypeScriptParser.instance) {
      TypeScriptParser.instance = new TypeScriptParser();
    }
    return TypeScriptParser.instance;
  }

  public async initParser(): Promise<void> {
    await Parser.init();
    const parser = new Parser();
    const Lang = await Language.load(
      getResourcePath(path.join("langs", "tree-sitter-typescript.wasm")),
    );
    parser.setLanguage(Lang);
    this.tsParser = parser;
    console.log("TypeScript parser initialized.");
  }

  public async parseCode(code: string) {
    if (!this.tsParser) {
      throw new Error("Parser not initialized. Call initParser() first.");
    }
    return this.tsParser.parse(code);
  }
}
