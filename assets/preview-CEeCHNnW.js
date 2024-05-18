const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFsWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0wNFQxNjozNDowN1oiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA1LTE2VDA3OjUyOjQ2KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA1LTE2VDA3OjUyOjQ2KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MmNlOTZlMC00ZDY2LWRhNDctODA2MS0wODkzNTgxYmFkYmYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODljY2I3MTgtODk0My04ZDQ3LWE1ZDMtZDI2NTQ1ZTIwYzYzIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODljY2I3MTgtODk0My04ZDQ3LWE1ZDMtZDI2NTQ1ZTIwYzYzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4OWNjYjcxOC04OTQzLThkNDctYTVkMy1kMjY1NDVlMjBjNjMiIHN0RXZ0OndoZW49IjIwMjItMTItMDRUMTY6MzQ6MDdaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjgyY2U5NmUwLTRkNjYtZGE0Ny04MDYxLTA4OTM1ODFiYWRiZiIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0xNlQwNzo1Mjo0NiswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pll6ZlgAAAHgSURBVFiF7Zc9U+MwEIZf3aSL5Na+cQkFXSZNatIQ8s/CX6Nh6Ji5o9Qgtdam1hXyirXw3fFhIIXfJlrF0j77ITlRMUacgn58NwBrBik1g5SaQUqdDIi6vLr+ap98gyo5ueBB29STerPO5yu7bWrFNvuxzse2qVU/fgaZGqLSGgBg9DLbRi9h+vm2GcIsAGCzXk0CcHt3HwFAQhit0TbobY3KaHSBeiCf107SrDeHA27v7mOl9QuIyiTbOo9AhC5QnpP6UGluDgdsd/u43e3BqWfJ6FmBjnlcGY2L8zM8/H6MANS7QEqA5HiZAdgRyzqfQa3zuVRSbwIZA5AyWiNQqj9nIhBBNmqlj6Mwr+oR7oHtbp/7QJYhOTwiEIlPyrY8LXJdoCMf5/jfjHAWLs7PEIgG3xm9HNSdx+w8RV6/KFfbpGc6sd8/QfosoG3qHF0puZksl3Uem/VKpSPt8x7W+cGz/frxZuX7gLPAEZaOU3S1YsCOSP4AVgCwWa+U3FPaf71Z5YWU0k6DNPNGD78e8xqZ4krr/P4ogRlA2vbJZXtR0MI+ub7hnh10RIONRpxwIHiv1OXVdWQAjprFqWt/jhz8CcQZsc4nEAn2KR5fITX/wSo0g5SaQUrNIKVOBuQPYeMetyxo3MMAAAAASUVORK5CYII=";export{A as default};
