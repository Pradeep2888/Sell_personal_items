import React, { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const TextEditor = ({ onEditorChange, content, defaultValue }) => {
    // const editorRef = useRef(null);

    console.log(defaultValue);

    // useEffect(() => {
    //     if (editorRef.current) {
    //         editorRef.current.editorRef.current.getElement().parentElement.parentElement.querySelector('label').remove()
    //     }
    // }, []);
    return (
        <Editor
            apiKey='gp78fb80jalu5f9xswhktxj4bkggr08lj5i9vxgzi2i9fe7d'
            init={{
                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                toolbar: 'blocks fontfamily fontsize | bold italic underline strikethrough | align lineheight link |checklist numlist bullist indent outdent | image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | emoticons charmap | removeformat |undo redo',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                mergetags_list: [
                    { value: 'First.Name', title: 'First Name' },
                    { value: 'Email', title: 'Email' },
                ],
                ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
            }}
            initialValue={defaultValue}
            value={content}
            // onInit={(evt, editor) => editorRef.current = editor}
            onEditorChange={onEditorChange}
        />
    );
}
export default TextEditor;


// export const EditorComponent = ({ onEditorChange, content, defaultValue }) => {
//     useEffect(() => {
//         ClassicEditor
//             .create(document.querySelector('#editor'), {
//                 // CKEditor configuration
//                 // Example: toolbar, plugins, etc.
//             })
//             .then(editor => {
//                 console.log('Editor initialized successfully:', editor);
//             })
//             .catch(error => {
//                 console.error('Error initializing editor:', error);
//             });
//     }, []); // Empty array means this effect runs only once

//     return (
//         <div>
//             <textarea id="editor" />
//         </div>
//     );
// };

