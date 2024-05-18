const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpUlEQVQ4jc2UsWrjQBRFz5h0O1LjwgKVElhdSJM6VZKt9gOWrbYPqfJF/oSgf5AbY0hhgtQEHGSwGum5ni2iGUu2tGzhYi8IiXkzZ969GkYZY7ikJhelAeru/vFf5g3ZUEMTrwDCYIan9VlxkxdmrL7JC5PEkYM2ImzL3RfQyveOi5artTkFdetJHLHJC3N7c63qRtz4YIZdmIU0ItTN8WlESOKI5Wrdi8N1aO11LfqedosbOeBp7awlcYTvaddpGMyUA27LXa+j5WpNGJx3bmF+C7YxhMGMbbkzgJoAZ/aSOGJb7hykkQN1+z5V3Qie/oICZnJaXK7Wbvcu7Mf3B2oRfv/66eDdeb2fYoubvGjtHLDjFrJYLEjTV/b7/VkMXU0AZXcMgxm1CLUI/sC5BJjP57w8P41GoO7uH12op5BahJfnJwCqqmI6nbrvLMt4e8/xtcbT35ybK2vN11rVIr0zZWFAD2Zt2wYsjPYvO/laK19rZSenaUpVVa5uYUVR8PaeOxdtRMdzOKaPzxKybGhcAaYL6mU4IsPIjfI3qf/+gr048A9GwRdgGHAG9AAAAABJRU5ErkJggnA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0wNFQxNjozNDoxNFoiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA0LTMwVDAyOjIwOjAzKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA0LTMwVDAyOjIwOjAzKzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NjkyM2QxNS01YTkyLTdiNGQtYWI0NS0zZWQ1YTUwN2Q4YjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjY5MjNkMTUtNWE5Mi03YjRkLWFiNDUtM2VkNWE1MDdkOGI3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjY5MjNkMTUtNWE5Mi03YjRkLWFiNDUtM2VkNWE1MDdkOGI3Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NjkyM2QxNS01YTkyLTdiNGQtYWI0NS0zZWQ1YTUwN2Q4YjciIHN0RXZ0OndoZW49IjIwMjItMTItMDRUMTY6MzQ6MTRaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XmPXOQAAAZRJREFUWIXtlzFvgzAQhZ+rjodXkBhhYKu6dO9U9RdXnbqzoGwZkjFSstqX2R0SGxMwmDZSO/hJyJJtfJ/vnY0Qxhj8Fz38NYCvBBNSggkpwYSUYEJ6nBt8fXuPWWPqChdTE78+P34OAwBlkSMjGvVvd3sTGt/u9qapKwekmXE4npZCLcNYyawP2HYbcwvhjzd1he1ub16en4TSHBtifc34IBZAM0Pp/tHMaOoKbbdZ9RWOyoy1BOhtkRm5wJrPyIicHU1dQWbkMlQW+WQNrYY5HE+DTLTdBmUxnmdB5BUKuFhXFjkOx5NBoKh9Ldk0sqSpK1eMNivq2t5KaUZGFyBMn7pVMIOF227jdu2DNHUl/FbzeTAvVos22R33Fpxdv2JGWeRCe+3w3XgQYDkzbqdlkUMxQzFDTtw7VmWRi5Btv4UZLC6JHIjNSgxQLFiUTZJIKOZBAUoiMRfEQls7cYfTNAguiYQfKCQL7tl6n3tmRrN3xxqIaBg1PhHWsrlAIvDurET6iQsowYSUYEJKMCElmJC+AUTE/D6OT8CaAAAAAElFTkSuQmCC";export{A as default};
