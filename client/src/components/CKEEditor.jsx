import React, { useEffect, useRef } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const EditorComponent = ({ data, onChange }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        const editorInstance = editorRef.current;
        
        if (editorInstance) {
            ClassicEditor
                .create(editorInstance, {
                    // CKEditor configuration
                })
                .then(editor => {
                    console.log('Editor initialized successfully:', editor);
                })
                .catch(error => {
                    console.error('Error initializing editor:', error);
                });

            // Optional: Cleanup function
            return () => {
                editorInstance.destroy().then(() => {
                    console.log('Editor destroyed');
                }).catch(error => {
                    console.error('Error destroying editor:', error);
                });
            };
        }
    }, []); // Empty dependency array means this effect runs once after initial render

    return (
        <CKEditor
            editor={ClassicEditor}
            config={{
                // CKEditor config if needed
            }}
            data={data}
            onChange={(event, editor) => {
                const newData = editor.getData();
                onChange(newData);
            }}
        />
    );
};

export default EditorComponent;
