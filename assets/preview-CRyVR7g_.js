const A="data:image/png;base64,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";export{A as default};
