const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFsWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0wNlQxOToyODoyMloiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA1LTE2VDEwOjE5OjU0KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA1LTE2VDEwOjE5OjU0KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNThjY2QyNC0xMjcxLTQ1NGUtOWY2MS1mMDA4NzMwOGM4NTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTRjNzRkZjItNGYzOS1iNTRkLWJkNzMtN2E3MDk0MTYyZTUyIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MTRjNzRkZjItNGYzOS1iNTRkLWJkNzMtN2E3MDk0MTYyZTUyIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNGM3NGRmMi00ZjM5LWI1NGQtYmQ3My03YTcwOTQxNjJlNTIiIHN0RXZ0OndoZW49IjIwMjItMTItMDZUMTk6Mjg6MjJaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE1OGNjZDI0LTEyNzEtNDU0ZS05ZjYxLWYwMDg3MzA4Yzg1NyIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0xNlQxMDoxOTo1NCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiilJ8IAAAEYSURBVEiJ7ZSxboMwGITvr9hqEJlsySMMbFGWrkmWJI9StS/CKzFZXrtU3RhgjJRMQeDO7gCmpJBKHTKV22z/993Zg8lai3vp4W7kGT7D/yQvTVNkSlsA2G/XyJTGfru+GrpU1ci4CMOrdaY0nlZLvL1/uC2ize5gHexSVagbg7wo0YXRrQAHd8Wk4PAZQ+AzLMIQmdLwhmYHTuKoNw4DfipT2gaMAQCOpzOkABpjUDemrf788oq8KG0SRz0kL0oLAEkcubBRQF6UNmAMtWlBE37yGmMgBaemG+quSG5ICt6HDeXAAWMEtI0HIgDfzzIlKTgdT2crBUcL+OzPhuDaGPjsceSnze7wG99pqnkPviWav9wZ/g/gX/mKgOd9ATYnAAAAAElFTkSuQmCC";export{A as default};
