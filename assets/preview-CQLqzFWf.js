const A="data:image/png;base64,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";export{A as default};
