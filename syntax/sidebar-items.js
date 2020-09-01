initSidebarItems({"enum":[["Direction",""],["NodeOrToken",""],["SyntaxKind","The kind of syntax node, e.g. `IDENT`, `USE_KW`, or `STRUCT`."],["TokenAtOffset","There might be zero, one or two leaves at a given offset."],["WalkEvent","`WalkEvent` describes tree walking process."]],"fn":[["lex_single_syntax_kind","Returns `SyntaxKind` and `Option<SyntaxError>` of the first token encountered at the beginning of the string."],["lex_single_valid_syntax_kind","The same as `lex_single_syntax_kind()` but returns only `SyntaxKind` and returns `None` if any tokenization error occured."],["tokenize","Break a string up into its component tokens. Beware that it checks for shebang first and its length contributes to resulting tokens offsets."]],"macro":[["T",""],["match_ast","Matches a `SyntaxNode` against an `ast` type."]],"mod":[["algo","FIXME: write short doc here"],["ast","Abstract Syntax Tree, layered on top of untyped `SyntaxNode`s"]],"struct":[["AstPtr","Like `SyntaxNodePtr`, but remembers the type of node"],["GreenNode","Internal node in the immutable tree. It has other nodes and tokens as children."],["Parse","`Parse` is the result of the parsing: a syntax tree and a collection of errors."],["SmolStr","A `SmolStr` is a string type that has the following properties:"],["SourceFile",""],["SyntaxError","Represents the result of unsuccessful tokenization, parsing or tree validation."],["SyntaxNodePtr","A pointer to a syntax node inside a file. It can be used to remember a specific node across reparses of the same file."],["SyntaxText",""],["SyntaxTreeBuilder",""],["TextRange","A range in text, represented as a pair of [`TextSize`][struct@TextSize]."],["TextSize","A measure of text length. Also, equivalently, an index into text."],["Token","A token of Rust source."]],"type":[["SyntaxElement",""],["SyntaxElementChildren",""],["SyntaxNode",""],["SyntaxNodeChildren",""],["SyntaxToken",""]]});