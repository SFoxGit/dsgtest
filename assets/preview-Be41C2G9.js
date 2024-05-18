const A="data:image/png;base64,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";export{A as default};
