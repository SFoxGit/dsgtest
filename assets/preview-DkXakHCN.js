const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFsWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0wNFQxNjozNDowN1oiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA1LTE2VDA3OjU4OjAzKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA1LTE2VDA3OjU4OjAzKzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NDYwOGIyNC03OWU5LTg3NGUtOGZlNi00MTFjMjZlY2VlNTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVkMTYzOTEtYjM4MC0zMjRlLTllZGItMmIzMTVhYWFlMDM3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzVkMTYzOTEtYjM4MC0zMjRlLTllZGItMmIzMTVhYWFlMDM3Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NWQxNjM5MS1iMzgwLTMyNGUtOWVkYi0yYjMxNWFhYWUwMzciIHN0RXZ0OndoZW49IjIwMjItMTItMDRUMTY6MzQ6MDdaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0NjA4YjI0LTc5ZTktODc0ZS04ZmU2LTQxMWMyNmVjZWU1MiIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0xNlQwNzo1ODowMyswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkO0L9kAAAE8SURBVEiJ1Zchb4RAEIXfNnU3rIX0JAgcweCrmv7ipqr+zOXcil3ZpLUw1VtzS+iJBmYopE8RSObbt8zOy5oYI+bq8en5t88RAN5eX8zcevezyRPVVTk+Ox9ieud8WFRHBL+FDswJPNs1ANwthXZtA+dD7NpmBL9/fKKuykVgEfx0vsSubdAPrAJL4D/AA39JmGI4AGBgBgD0zGLXErg5nS/IiNSuJXAAgM0IGR1gicau3wo+utdK5LyuSuN8wEORbw+fSrP1Ynhyn9FBWkLvPCMSu1fD05mXSA3XaBV4zwxL9PfBcivNpBPDnQ/REqFnxrHIjeTMq5ynYyaddkq4bsSK4M6HeCxyOB82jdRRuwVL0h6RuspcF8OTdms4u8I/F18arouAJTJLbypJ/zJYzDVM0DNv2+3TBWj0DSZ8ivYtKmiHAAAAAElFTkSuQmCC";export{A as default};
