const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFsWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0zMVQxMDo0NjowNloiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA1LTE2VDEwOjA4OjE4KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA1LTE2VDEwOjA4OjE4KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMTFjMWY5Mi1mNTg5LTJmNDQtOWEwMC0wMzYwNzhmOTZmYWYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk3ODExOTItMmU5Yi1kNzQ0LWEyNTctNTlhYjNkZjY3ZTY1IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OTk3ODExOTItMmU5Yi1kNzQ0LWEyNTctNTlhYjNkZjY3ZTY1Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5OTc4MTE5Mi0yZTliLWQ3NDQtYTI1Ny01OWFiM2RmNjdlNjUiIHN0RXZ0OndoZW49IjIwMjItMTItMzFUMTA6NDY6MDZaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxMWMxZjkyLWY1ODktMmY0NC05YTAwLTAzNjA3OGY5NmZhZiIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0xNlQxMDowODoxOCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgtexlYAAAFZSURBVDiNjZK/S8NAGIafiCDoJdSppSoi7VBFEAkR8ue59T8Sh+JS6FC6FVpBh5BQmqkhd5nPpXfkp/otx325e7733ryO1hqA6XRKvdabrZaqsPsw8J3FckWuFAAf728AnDZuAlGcaKkUrhC2J1XBYrnSx61TPt+ARHGib2+uieIEqRRGiZl+LF0G1SHacwXrzRagosRUDdaEHLKMXCoL8NwqxBUC9hZk1ViI8UGqAldcsNunAHbtUgZw0toFhoN+BQAgW55SgZRNLJfxIO/4DjVP6qa54sL2PSHs2qnk8X7ieLVcGH8m41EF1AlpUzQc9JGqYLdP25S05+QYa50rRa4U+Vdz6r+UhIHveEIwGY8ah1+en4yS32NvQIcs054QlV992esBON/pXeV8K8RcCAPfieJEh4FvJ3+mD5wL2M5f/4YYyfXoX53Nmc1mlV5nYsuKylUHAPwARFOwhnxGiRcAAAAASUVORK5CYII=";export{A as default};
