const A="data:image/png;base64,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";export{A as default};
