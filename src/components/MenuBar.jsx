import { useCurrentEditor } from "@tiptap/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBold,
    faItalic,
    faStrikethrough,
    faCode,
    faParagraph,
    faHeading,
    faListUl,
    faListOl,
    faCodeBranch,
    faQuoteRight,
    faMinus,
    faUndo,
    faRedo,
    faTint,
    faSpellCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const MenuBar = (props) => {
    const { editor } = useCurrentEditor();
    if (!editor) {
        return null;
    }
    const buttonClass = `text-xs px-2 py-1 m-[0.9px] lg:text-sm  lg:px-4 lg:pt-2 lg:py-2 lg:m-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md
  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
  focus:ring-opacity-75 transition duration-200 uppercase`;
  
  const spellCheck = "Parse the HTML document to extract text content.Check the spelling of the extracted text,and replace with right spelling and give back the HTML without chancing any tag with right spelling. you have to give me only html without adding any text or tag after and before. don't add any star on wrongly spelled word";

    const activeClass = `bg-blue-700 hover:bg-blue-800`;

    useEffect(() => {
        const TipTaps = document
            .querySelector(".TiPTap")
            .getElementsByTagName("button");
        for (let TipTap of TipTaps) {
            let childNodes = TipTap.childNodes;
            for (let child of childNodes) {
                if (child.tagName === "svg") {
                    child.classList.add("mr-1");
                }
            }
        }
    });

    useEffect(() => {
        const updateArticle = () => {
            props.handleArticleChange(editor.getHTML());
        };

        // Set initial content
        updateArticle();

        //  Subscribe to editor updates
        editor.on("update", updateArticle);

        // Cleanup on unmount
        return () => {
            editor.off("update", updateArticle);
        };
    }, [editor]);

    console.log(props.edit, "form body");

    //PostLeft edit is true
    useEffect(() => {
        if (props.edit) {
            editor.commands.setContent(props.body);
        }
    }, [props.edit]);

    // if gemini content is not empty
    console.log(typeof props.geminiContent, "gemini")
    useEffect(()=> {
        if(props.geminiContent !== ""){
            // console.log(props.geminiContent, "gemini")
            editor.commands.setContent(props.geminiContent);
        }
    }, [props.geminiContent]);
    return (
        <>
            <button
                className="lg:"
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`${buttonClass} ${
                    editor.isActive("bold") ? activeClass : ""
                }`}
            >
                <FontAwesomeIcon icon={faBold} />
                bold
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`${buttonClass} ${
                    editor.isActive("italic") ? activeClass : ""
                }`}
            >
                <FontAwesomeIcon icon={faItalic} />
                italic
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={`${buttonClass} ${
                    editor.isActive("strike") ? activeClass : ""
                }`}
            >
                <FontAwesomeIcon icon={faStrikethrough} />
                strike
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                className={`${buttonClass} ${
                    editor.isActive("code") ? activeClass : ""
                }`}
            >
                <FontAwesomeIcon icon={faCode} />
                code
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().unsetAllMarks().run()}
                className={buttonClass}
            >
                clear marks
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().clearNodes().run()}
                className={buttonClass}
            >
                clear nodes
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={`${buttonClass} ${
                    editor.isActive("paragraph") ? activeClass : ""
                }`}
            >
                <FontAwesomeIcon icon={faParagraph} />
                paragraph
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={`${buttonClass} ${
                    editor.isActive("heading", { level: 1 }) ? activeClass : ""
                }`}
            >
                <FontAwesomeIcon icon={faHeading} />
                h1
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={`${buttonClass} ${
                    editor.isActive("heading", { level: 2 }) ? activeClass : ""
                }`}
            >
                <FontAwesomeIcon icon={faHeading} />
                h2
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={`${buttonClass} ${
                    editor.isActive("heading", { level: 3 }) ? activeClass : ""
                }`}
            >
                <FontAwesomeIcon icon={faHeading} />
                h3
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 4 }).run()
                }
                className={`${buttonClass} ${
                    editor.isActive("heading", { level: 4 }) ? activeClass : ""
                }`}
            >
                <FontAwesomeIcon icon={faHeading} />
                h4
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 5 }).run()
                }
                className={`${buttonClass} ${
                    editor.isActive("heading", { level: 5 }) ? activeClass : ""
                }`}
            >
                <FontAwesomeIcon icon={faHeading} />
                h5
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 6 }).run()
                }
                className={`${buttonClass} ${
                    editor.isActive("heading", { level: 6 }) ? activeClass : ""
                }`}
            >
                <FontAwesomeIcon icon={faHeading} />
                h6
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`${buttonClass} ${
                    editor.isActive("bulletList") ? activeClass : ""
                }`}
            >
                <FontAwesomeIcon icon={faListUl} />
                bullet list
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`${buttonClass} ${
                    editor.isActive("orderedList") ? activeClass : ""
                }`}
            >
                <FontAwesomeIcon icon={faListOl} />
                ordered list
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={`${buttonClass} ${
                    editor.isActive("codeBlock") ? activeClass : ""
                }`}
            >
                <FontAwesomeIcon icon={faCodeBranch} />
                code block
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`${buttonClass} ${
                    editor.isActive("blockquote") ? activeClass : ""
                }`}
            >
                <FontAwesomeIcon icon={faQuoteRight} />
                blockquote
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
                className={buttonClass}
            >
                <FontAwesomeIcon icon={faMinus} />
                horizontal rule
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().setHardBreak().run()}
                className={buttonClass}
            >
                hard break
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
                className={buttonClass}
            >
                <FontAwesomeIcon icon={faUndo} />
                undo
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
                className={buttonClass}
            >
                <FontAwesomeIcon icon={faRedo} />
                redo
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().setColor("#958DF1").run()}
                className={`${buttonClass} ${
                    editor.isActive("textStyle", { color: "#958DF1" })
                        ? activeClass
                        : ""
                }`}
            >
                <FontAwesomeIcon icon={faTint} />
                purple
            </button>

            <button type="button" className={buttonClass} onClick={()=> props.handleGenerateText(spellCheck)}>
                <FontAwesomeIcon icon={faSpellCheck} />A
                <span className="lowercase">i</span>{" "}
                <span className="lowercase">Spell Check</span>
            </button>

            <button type="button" className={buttonClass}>
                <FontAwesomeIcon icon={faSpellCheck} />A
                <span className="lowercase">i</span>{" "}
                <span className="lowercase" onClick={()=> props.handleGenerateText("I’ve written a portion of a blog post, you have to enhance the text quality using my blog post written tone. you don't have to use mark where you have enhance the text")}>Upscale Text</span>
            </button>

            <button type="button" className={buttonClass} onClick={()=> props.handleGenerateText("I’ve written a portion of a blog post, you have to complete the post using my written tone.give me with beautiful html structure .you don't have to use any mark where you have enhance the text")}>
                <FontAwesomeIcon icon={faSpellCheck} />A
                <span className="lowercase">i</span>{" "}
                <span className="lowercase">Generate Text</span>
            </button>
        </>
    );
};

export default MenuBar;
