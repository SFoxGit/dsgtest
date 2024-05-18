const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFsWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0yM1QxMDoyMjowMVoiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA1LTE2VDA4OjA4OjA1KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA1LTE2VDA4OjA4OjA1KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiODk1NWM0Yi0wZTIyLTI0NGQtODQ5Yy1jNDU1MmM3MzFlY2EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZDBlYmNlNmMtYmZjNy04YzQ3LWE0NDAtYzBmZDY1ZTUxOThkIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDBlYmNlNmMtYmZjNy04YzQ3LWE0NDAtYzBmZDY1ZTUxOThkIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMGViY2U2Yy1iZmM3LThjNDctYTQ0MC1jMGZkNjVlNTE5OGQiIHN0RXZ0OndoZW49IjIwMjItMTItMjNUMTA6MjI6MDFaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmI4OTU1YzRiLTBlMjItMjQ0ZC04NDljLWM0NTUyYzczMWVjYSIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0xNlQwODowODowNSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqfWK9EAAAFgSURBVEiJ7daxbsIwEAbg/1C2OFlBZYSBDbFkrTr11fIArfpqldoOVQuCqSi+zO7Q+HQkhsYpZeLfYkf58PlsQc45XDKji2pX8D+SlGV5ju9I533t93qcOuC5II9VluU5z4yfF3go2IEAoLIMy9x5uYFpKOg04iEAsMywXMu45RqZSQ/QWFAwXboQplE/nmfGxYBOl05ns90dPFeBslavjGK17F1SF1rVMahYLTvd6dMH7GAeaq/kFNQXdO8fn0ehxXxG7VX+BRTsGLTZ7oL71ReUs+Ix33mnoPu7W/lA65YJg+olAuCeX95wMxkDgGAhqFgteyMHYKvzKDOp0yXMjSENLeaznzkbV0oAeHp8QKKvovV253JjkJkUlmtMJ2NaN/hUVh0P6W2RPfRYM0GZSZ2GzpWk0QXLjaHmV3mUQlfW0IxCmGr1Xw9ybBIFkD5TFbPc9LFn7VTo+jfxCsbmGwvDE6O2sXhuAAAAAElFTkSuQmCC";export{A as default};
