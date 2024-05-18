const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNS0yMFQxMDo0NDo1NCswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDUtMzFUMTc6MzQ6NDArMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDUtMzFUMTc6MzQ6NDArMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY2ZmQyODk2LTYyMjItZmY0Zi1hZmRjLWZlN2YxNDU1ZDdhZiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmNmZkMjg5Ni02MjIyLWZmNGYtYWZkYy1mZTdmMTQ1NWQ3YWYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmNmZkMjg5Ni02MjIyLWZmNGYtYWZkYy1mZTdmMTQ1NWQ3YWYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY2ZmQyODk2LTYyMjItZmY0Zi1hZmRjLWZlN2YxNDU1ZDdhZiIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0yMFQxMDo0NDo1NCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl21uBsAAAGSSURBVEiJrZUxb4JQFIXPa+3khVUaRjRhMy6ubZe2/8zf5GRcWQhLa9I6mugkgetMB7nPBzxUtCch4ZHHd8899wXUbDZDm+aLZWGup5Oxat1cUxQn6J2Dfry9YJ+myHJGzowoTjoVa8Dni2UhUAEDgEME3zvty/mgi0mR+rq3T1Ob88Yz3xtoqMglggl1iZAxtztva9WMxCVCOAp0XACQMSNjrrz/YAPZVL6kAKiMGaufNVyH4BDBob7uwtTVcFMukcqYK86lgNmh9bSccQ/gGFE4DJAz6xk41L/feR0sA5Qi4TDQ7jvBbWDfGyjzhOTG/dXwNnDOBz0DswOgY+Y2sOm6rqucR3FSuETYbHcN8HQy1oMWlevionMBC/TYwQlsSGXMx73lJ+Ms3AS7RJUY6m5NyVBbY6mDAbTGUC8mQ7U6r4PDUXCuwYbK7lTDuc3xrarAozgpfG9QAd/qGjBiEfBmu7sZLFBRT8DhMMDqd93pP3lJj099p5hOxki+vu8G+8+evjbbHdTr+6d8f//NsegPFMksgfNmGpMAAAAASUVORK5CYII=";export{A as default};
