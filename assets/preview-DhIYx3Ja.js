const A="data:image/png;base64,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";export{A as default};
