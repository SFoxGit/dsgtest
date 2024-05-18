const A="data:image/png;base64,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";export{A as default};
