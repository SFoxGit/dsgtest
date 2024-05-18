const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHCWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0wNFQxNjozNDoxNFoiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA1LTE2VDEwOjQ1OjUwKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA1LTE2VDEwOjQ1OjUwKzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyOTdjZjYxMi1jMDg2LTlkNDAtOWVhMS1lMzQwMWRlNGNkNTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6YmI2NDA5MGEtNTM4Yi0yMDRkLWI3NDktOTgyNmYzYmJhM2FjIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YmI2NDA5MGEtNTM4Yi0yMDRkLWI3NDktOTgyNmYzYmJhM2FjIj4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmVjNzBlMGIzLTE5YTgtNzY0Ny1hMDNiLTdiNDRhNmM5ZDhiNzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MDM2OWRmOGEtZjZkZC0xOTQyLWE4MjctNDk2MzUxMjZjNDFiPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpjYzVlZGM5Zi04YTE1LTAyNDgtYTQ0Yi0wZGQ3YjVjOThjODc8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOmZkMThiMDVhLTk3OTUtMGU0Ny1hYTU3LWZkM2FmMjY2OWMxYzwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmJiNjQwOTBhLTUzOGItMjA0ZC1iNzQ5LTk4MjZmM2JiYTNhYyIgc3RFdnQ6d2hlbj0iMjAyMi0xMi0wNFQxNjozNDoxNFoiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Mjk3Y2Y2MTItYzA4Ni05ZDQwLTllYTEtZTM0MDFkZTRjZDU4IiBzdEV2dDp3aGVuPSIyMDIzLTA1LTE2VDEwOjQ1OjUwKzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+b8oTPgAAAWJJREFUOI2Vk7FqAkEQhr89UqqNgoJljjPFgdhoa2WMTR4gBIT0YuVbpPJVEskraCOClSikERT2mru13hTeLnt3QpIfDm5nZ775d9gV/cGQP0rn1gLg7pckup22WK03utmoUy6VqJRLAKzWGw0IF2CTgHwiAIlSdq/babNab7QB6EpaaBQnyjgwIJqNuoUYebeK3Y5xcv26nTbH0zmzZwDXjkqRqEumg7uOE8WDf8/xdM7keICIleLt9SUDMUkuxI2lboQHEAY+ALPpxIFciG9A8rJHkFIC8Pz0SKwUriu3a35eFnA4HACo1WqEgc9i8YGUkjDwLfDWsL1CxFGr1WI0GjGbTjLxFCYARH8wJAx83ev1qFarAERRlPlfLpcAbHd76yI9mrAOTIH7H0WRnc12t3cLDeh6E7e7vYBFwYWU0s6G9PGkEHO9hdBa8/05BuD9q1x4TPP5XORjroTWhZp/6QcsctoU8iOHDgAAAABJRU5ErkJggg==";export{A as default};
