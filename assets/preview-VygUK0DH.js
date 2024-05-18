const A="data:image/png;base64,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";export{A as default};
