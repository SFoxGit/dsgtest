const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNSwgMjAyMi8wNS8wOS0wNzoyMjoyOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0zMVQxMTo0Nzo1MVoiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA1LTE2VDA4OjMxOjU5KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA1LTE2VDA4OjMxOjU5KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5YmRmZjUxNy0zZDhmLWIwNDAtYWExNC1jMzI1OGY1NTJkYmQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OWJkZmY1MTctM2Q4Zi1iMDQwLWFhMTQtYzMyNThmNTUyZGJkIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OWJkZmY1MTctM2Q4Zi1iMDQwLWFhMTQtYzMyNThmNTUyZGJkIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YmRmZjUxNy0zZDhmLWIwNDAtYWExNC1jMzI1OGY1NTJkYmQiIHN0RXZ0OndoZW49IjIwMjItMTItMzFUMTE6NDc6NTFaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cby7FAAAAi1JREFUSIndlU1rE1EUhp9bB7E6yRRmlTJioR3Iys9YcCEhi5IfILgTV133b3Sbtavir8gqpJtAPlpbBINjVibNRAjJzNwqiHJdNHfIV5Mi7ULP6jD33vd57zmHO0IpxU3Gyo2q/xcAY39//1qEBsOhThUgml6LUMr5NyiWyqpSa/xt98UIAswpUbFUVknT5MXzZ2L82wLBmbUwknFuLBKv1BoqlJJ8Liu4PLRjvWcCaEzvTpj30OIbzjoA3W534lAqlZoAjtWfMJIkE6Y483sAyiiWyiqfywrtHuDjp6bacNZxXRfLsrBtG4B+v08QBHiepzRkMByqkei0exXfYLqh9poVi2thIAa5rovneerO6irj4p2uD8CZ31OhlABiJZ/LilBKkqZJKCWRPJ+uWhz9fh/btvnabvPz12/CSPLgvkOn69P0WnT8Hh2/x0hPABiD4ZDtJ49E9fjkSmNZPjwkjCTRhUMqtQYjtyRNk7S7KQCaXgsAQ49Uemu08KWlAKIowrIs2u12LJ5IJAgjyW3jFvaaxWnz88zZ6vGJSm9tCg0V817Tvb09NTj/wU72JUEQUP1wys7rV7QbR/i+TyaT0c2mUCgsGuHZMV0UjuPgOA76hleJSwHbjx8CYFnWRd77BhA7B5a6hwWvqR7R8TwIgnHnon6wu0x/PuDN0++iXq8TBEH8TYv7vh87z7x9txQwt8na2fujuzOL42WpH+wuhcwFXGf8+7/MGwf8AdpRH7FcuijSAAAAAElFTkSuQmCC";export{A as default};
