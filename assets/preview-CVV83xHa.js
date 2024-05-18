const A="data:image/png;base64,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";export{A as default};
