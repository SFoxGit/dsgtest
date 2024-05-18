const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFsWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0wNlQxODo1NDoxOFoiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA1LTE2VDA3OjM2OjU3KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA1LTE2VDA3OjM2OjU3KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmODA0NzgzZi1mN2UxLWYwNDQtYTZjOS04NWIzYzFhNTQzMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NmM5N2FmMzAtMTU1ZC04ZTRjLThhMzgtOTU4ODMyMzNmMDYxIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NmM5N2FmMzAtMTU1ZC04ZTRjLThhMzgtOTU4ODMyMzNmMDYxIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2Yzk3YWYzMC0xNTVkLThlNGMtOGEzOC05NTg4MzIzM2YwNjEiIHN0RXZ0OndoZW49IjIwMjItMTItMDZUMTg6NTQ6MThaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY4MDQ3ODNmLWY3ZTEtZjA0NC1hNmM5LTg1YjNjMWE1NDMwMyIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0xNlQwNzozNjo1NyswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkkSpywAAAFuSURBVFiF7Zc9boNAEIXfRum8oKUCCVs+hOXCVZQqV+NGERXiDpGSC6DgKhYMNSniRbA42R9+3OQ1iAHtfDOM3i6sbVvolCRJ/7b9ulwQCMH6wTTL2zgKWU0NKiJk6at2XQB4MHpLSV7VhDTLO/I0y1ufcxTlWV+NokeX5DUR4igcQFRE8ipj7NYiUwBGiqMQNTWjuIRZFEAm9vhmEC/KM2BYvQ3AoP395NeEnXzOmU0HbIewk0z+8vzEromd1nECUJNPkXMH1IrVWVgcYC6ZArBACPjeT9U1NTgdD4P2e2vOwJyaDUB2Z0kAFggBj3Mrp5sToJO6DwBA8VkCsLNhFwC2322dB24OgE6qD9zalJYCYPvd9teHtpbs2gF2Oh4GgXs44eR9YCrAQP9OuIYTLqLZAAIh7gvgKqND6dv7h/adNMuXA9DJ5xwe3zjZsRGAbuGKqNsF17LikVY9lv8BYW3PRp/A4JDBej+lVvoGQh6L20UFKVoAAAAASUVORK5CYII=";export{A as default};
