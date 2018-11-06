import styled, { css } from 'styled-components';

export const SVGIcon = styled.div`
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
    background-position: 50%;
    opacity: .54;
    background-position: center;
    background-repeat: no-repeat;
    padding: 24px;
    cursor: pointer;
    :hover {
        opacity: 1;
    }
    ${props => props.refresh && css`
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBkPSJNMTMgOXYyaDdWNGgtMnYyLjc0QzE2LjUzIDUuMDcgMTQuNCA0IDEyIDRjLTIuMjEgMC00LjIxLjktNS42NiAyLjM0UzQgOS43OSA0IDEyYzAgNC40MiAzLjU4IDggOCA4IDIuMjEgMCA0LjIxLS45IDUuNjYtMi4zNGwtMS40Mi0xLjQyQTUuOTggNS45OCAwIDAgMSAxMiAxOGMtMy4zMSAwLTYtMi42OS02LTYgMC0xLjY1LjY3LTMuMTUgMS43Ni00LjI0QTUuOTggNS45OCAwIDAgMSAxMiA2YTYuMDEgNi4wMSAwIDAgMSA1LjE5IDNIMTN6Ii8+Cjwvc3ZnPgo=);
    `}
    ${props => props.settings && css`
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBkPSJNMTMuODUgMjIuMjVoLTMuN2MtLjc0IDAtMS4zNi0uNTQtMS40NS0xLjI3bC0uMjctMS44OWMtLjI3LS4xNC0uNTMtLjI5LS43OS0uNDZsLTEuOC43MmMtLjcuMjYtMS40Ny0uMDMtMS44MS0uNjVMMi4yIDE1LjUzYy0uMzUtLjY2LS4yLTEuNDQuMzYtMS44OGwxLjUzLTEuMTljLS4wMS0uMTUtLjAyLS4zLS4wMi0uNDYgMC0uMTUuMDEtLjMxLjAyLS40NmwtMS41Mi0xLjE5Yy0uNTktLjQ1LS43NC0xLjI2LS4zNy0xLjg4bDEuODUtMy4xOWMuMzQtLjYyIDEuMTEtLjkgMS43OS0uNjNsMS44MS43M2MuMjYtLjE3LjUyLS4zMi43OC0uNDZsLjI3LTEuOTFjLjA5LS43LjcxLTEuMjUgMS40NC0xLjI1aDMuN2MuNzQgMCAxLjM2LjU0IDEuNDUgMS4yN2wuMjcgMS44OWMuMjcuMTQuNTMuMjkuNzkuNDZsMS44LS43MmMuNzEtLjI2IDEuNDguMDMgMS44Mi42NWwxLjg0IDMuMThjLjM2LjY2LjIgMS40NC0uMzYgMS44OGwtMS41MiAxLjE5Yy4wMS4xNS4wMi4zLjAyLjQ2cy0uMDEuMzEtLjAyLjQ2bDEuNTIgMS4xOWMuNTYuNDUuNzIgMS4yMy4zNyAxLjg2bC0xLjg2IDMuMjJjLS4zNC42Mi0xLjExLjktMS44LjYzbC0xLjgtLjcyYy0uMjYuMTctLjUyLjMyLS43OC40NmwtLjI3IDEuOTFjLS4xLjY4LS43MiAxLjIyLTEuNDYgMS4yMnptLTMuMjMtMmgyLjc2bC4zNy0yLjU1LjUzLS4yMmMuNDQtLjE4Ljg4LS40NCAxLjM0LS43OGwuNDUtLjM0IDIuMzguOTYgMS4zOC0yLjQtMi4wMy0xLjU4LjA3LS41NmMuMDMtLjI2LjA2LS41MS4wNi0uNzhzLS4wMy0uNTMtLjA2LS43OGwtLjA3LS41NiAyLjAzLTEuNTgtMS4zOS0yLjQtMi4zOS45Ni0uNDUtLjM1Yy0uNDItLjMyLS44Ny0uNTgtMS4zMy0uNzdsLS41Mi0uMjItLjM3LTIuNTVoLTIuNzZsLS4zNyAyLjU1LS41My4yMWMtLjQ0LjE5LS44OC40NC0xLjM0Ljc5bC0uNDUuMzMtMi4zOC0uOTUtMS4zOSAyLjM5IDIuMDMgMS41OC0uMDcuNTZhNyA3IDAgMCAwLS4wNi43OWMwIC4yNi4wMi41My4wNi43OGwuMDcuNTYtMi4wMyAxLjU4IDEuMzggMi40IDIuMzktLjk2LjQ1LjM1Yy40My4zMy44Ni41OCAxLjMzLjc3bC41My4yMi4zOCAyLjU1eiIvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMuNSIvPgo8L3N2Zz4K);
    `}
    ${props => props.sortView === 'default' && css`
        background-size: 18px 24px;
        background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTExLjYyNyA1MTEuNjI3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuNjI3IDUxMS42Mjc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzMzLjU4NCw0MzguNTM2aC03My4wODdjLTIuNjY2LDAtNC44NTMsMC44NTUtNi41NjcsMi41NzNjLTEuNzA5LDEuNzExLTIuNTY4LDMuOTAxLTIuNTY4LDYuNTY0djU0LjgxNSAgICBjMCwyLjY3MywwLjg1NSw0Ljg1MywyLjU2OCw2LjU3MWMxLjcxNSwxLjcxMSwzLjkwMSwyLjU2Niw2LjU2NywyLjU2Nmg3My4wODdjMi42NjYsMCw0Ljg1Ni0wLjg1NSw2LjU2My0yLjU2NiAgICBjMS43MTgtMS43MTksMi41NjMtMy44OTgsMi41NjMtNi41NzF2LTU0LjgxNWMwLTIuNjYzLTAuODQ2LTQuODU0LTIuNTYzLTYuNTY0QzMzOC40NCw0MzkuMzkyLDMzNi4yNSw0MzguNTM2LDMzMy41ODQsNDM4LjUzNnoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNMTk2LjU0LDQwMS45OTFoLTU0LjgxN1Y5LjEzNmMwLTIuNjYzLTAuODU0LTQuODU2LTIuNTY4LTYuNTY3QzEzNy40NDEsMC44NTksMTM1LjI1NCwwLDEzMi41ODcsMEg3Ny43NjkgICAgYy0yLjY2MywwLTQuODU2LDAuODU1LTYuNTY3LDIuNTY4Yy0xLjcwOSwxLjcxNS0yLjU2OCwzLjkwNS0yLjU2OCw2LjU2N3YzOTIuODU1SDEzLjgxNmMtNC4xODQsMC03LjA0LDEuOTAyLTguNTY0LDUuNzA4ICAgIGMtMS41MjUsMy42MjEtMC44NTUsNi45NSwxLjk5Nyw5Ljk5Nmw5MS4zNjEsOTEuMzY1YzIuMDk0LDEuNzA3LDQuMjgxLDIuNTYyLDYuNTY3LDIuNTYyYzIuNDc0LDAsNC42NjUtMC44NTUsNi41NjctMi41NjIgICAgbDkxLjA3Ni05MS4wNzhjMS45MDYtMi4yNzksMi44NTYtNC41NzEsMi44NTYtNi44NDRjMC0yLjY3Ni0wLjg1OS00Ljg1OS0yLjU2OC02LjU4NCAgICBDMjAxLjM5NSw0MDIuODQ3LDE5OS4yMDgsNDAxLjk5MSwxOTYuNTQsNDAxLjk5MXoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNMzg4LjQsMjkyLjM2MkgyNjAuNDk0Yy0yLjY2NiwwLTQuODUzLDAuODU1LTYuNTY3LDIuNTY2Yy0xLjcxLDEuNzExLTIuNTY4LDMuOTAxLTIuNTY4LDYuNTYzdjU0LjgyMyAgICBjMCwyLjY2MiwwLjg1NSw0Ljg1MywyLjU2OCw2LjU2M2MxLjcxNCwxLjcxMSwzLjkwMSwyLjU2Niw2LjU2NywyLjU2NkgzODguNGMyLjY2NiwwLDQuODU1LTAuODU1LDYuNTYzLTIuNTY2ICAgIGMxLjcxNS0xLjcxMSwyLjU3My0zLjkwMSwyLjU3My02LjU2M3YtNTQuODIzYzAtMi42NjItMC44NTgtNC44NTMtMi41NzMtNi41NjNDMzkzLjI1NiwyOTMuMjE4LDM5MS4wNjYsMjkyLjM2MiwzODguNCwyOTIuMzYyeiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik01MDQuNjA0LDIuNTY4QzUwMi44ODksMC44NTksNTAwLjcwMiwwLDQ5OC4wMzYsMEgyNjAuNDk3Yy0yLjY2NiwwLTQuODUzLDAuODU1LTYuNTY3LDIuNTY4ICAgIGMtMS43MDksMS43MTUtMi41NjgsMy45MDUtMi41NjgsNi41Njd2NTQuODE4YzAsMi42NjYsMC44NTUsNC44NTMsMi41NjgsNi41NjdjMS43MTUsMS43MDksMy45MDEsMi41NjgsNi41NjcsMi41NjhoMjM3LjUzOSAgICBjMi42NjYsMCw0Ljg1My0wLjg1NSw2LjU2Ny0yLjU2OGMxLjcxMS0xLjcxNCwyLjU2Ni0zLjkwMSwyLjU2Ni02LjU2N1Y5LjEzNkM1MDcuMTczLDYuNDczLDUwNi4zMTQsNC4yNzksNTA0LjYwNCwyLjU2OHoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNNDQzLjIyLDE0Ni4xODFIMjYwLjQ5NGMtMi42NjYsMC00Ljg1MywwLjg1NS02LjU2NywyLjU3Yy0xLjcxLDEuNzEzLTIuNTY4LDMuOS0yLjU2OCw2LjU2N3Y1NC44MTYgICAgYzAsMi42NjcsMC44NTUsNC44NTQsMi41NjgsNi41NjdjMS43MTQsMS43MTEsMy45MDEsMi41Nyw2LjU2NywyLjU3SDQ0My4yMmMyLjY2MywwLDQuODUzLTAuODU1LDYuNTctMi41NyAgICBjMS43MDgtMS43MTMsMi41NjMtMy45LDIuNTYzLTYuNTY3di01NC44MTZjMC0yLjY2Ny0wLjg1NS00Ljg1OC0yLjU2My02LjU2N0M0NDguMDY5LDE0Ny4wNCw0NDUuODc5LDE0Ni4xODEsNDQzLjIyLDE0Ni4xODF6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
    `}
    ${props => props.sortView === 'alpha' && css`
        background-size: 18px 24px;
        background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDk3LjY4IDk3LjY4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5Ny42OCA5Ny42ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00Mi43Miw2NS41OTZoLTguMDExVjJjMC0xLjEwNS0wLjg5Ni0yLTItMmgtMTYuMTNjLTEuMTA0LDAtMiwwLjg5NS0yLDJ2NjMuNTk2SDYuNTY4Yy0wLjc3LDAtMS40NzIsMC40NDMtMS44MDQsMS4xMzcgICAgQzQuNDMyLDY3LjQyOCw0LjUyOCw2OC4yNSw1LjAxLDY4Ljg1bDE4LjA3NiwyNi45NTVjMC4zOCwwLjQ3MywwLjk1MywwLjc0NiwxLjU1OCwwLjc0NnMxLjE3OC0wLjI3MywxLjU1OC0wLjc0Nkw0NC4yNzgsNjguODUgICAgYzAuNDgyLTAuNiwwLjU3OC0xLjQyMiwwLjI0Ni0yLjExN0M0NC4xOTIsNjYuMDM5LDQzLjQ5LDY1LjU5Niw0Mi43Miw2NS41OTZ6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTkyLjk5OCwzOS4zMTVMNzkuNjY4LDEuNTQxYy0wLjI4Mi0wLjc5OS0xLjAzOC0xLjMzNC0xLjg4Ni0xLjMzNGgtMy44NjFjLTAuMTA2LDAtMC4yMTMsMC4wMDgtMC4zMTcsMC4wMjUgICAgYy0wLjEwNC0wLjAxOC0wLjIxLTAuMDI1LTAuMzE4LTAuMDI1aC0zLjc2Yy0wLjg1LDAtMS42MDUsMC41MzUtMS44ODgsMS4zMzZMNTQuMzYyLDM5LjMxN2MtMC4yMTUsMC42MTEtMC4xMiwxLjI4OSwwLjI1NSwxLjgxOCAgICBjMC4zNzUsMC41MjksMC45ODIsMC44NDQsMS42MzIsMC44NDRoNS43NzRjMC44OCwwLDEuNjU2LTAuNTc0LDEuOTEzLTEuNDE2bDIuNTM1LTguMzI0SDgwLjg5bDIuNTM2LDguMzI0ICAgIGMwLjI1NiwwLjg0MiwxLjAzMywxLjQxNiwxLjkxMywxLjQxNmg1Ljc3MWMwLjY0OCwwLDEuMjU4LTAuMzE0LDEuNjMzLTAuODQ0QzkzLjExOSw0MC42MDQsOTMuMjEzLDM5LjkyNiw5Mi45OTgsMzkuMzE1eiAgICAgTTY4Ljg2NCwyNC4yODNjMi4zOTctNy43Nyw0LjAyLTEzLjE2Niw0LjgyLTE2LjA0MWw0LjkyOCwxNi4wNDFINjguODY0eiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik04Ny4yNTUsODkuODM4SDY5LjQzOGwxOC45MjgtMjcuMjA1YzAuMjMyLTAuMzM2LDAuMzU3LTAuNzM0LDAuMzU3LTEuMTQzdi0zLjQxNmMwLTEuMTA0LTAuODk2LTItMi0yaC0yNi4wNyAgICBjLTEuMTA0LDAtMiwwLjg5Ni0yLDJ2My44NDRjMCwxLjEwNSwwLjg5NiwyLDIsMmgxNi43ODJMNTguNDgxLDkxLjA5NGMtMC4yMzQsMC4zMzYtMC4zNTksMC43MzQtMC4zNTksMS4xNDV2My40NDEgICAgYzAsMS4xMDUsMC44OTYsMiwyLDJoMjcuMTM1YzEuMTA0LDAsMi0wLjg5NSwyLTJ2LTMuODQyQzg5LjI1NSw5MC43MzIsODguMzYxLDg5LjgzOCw4Ny4yNTUsODkuODM4eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=)
    `}
    ${props => props.sortView === 'reverse-alpha' && css`
        background-size: 18px 24px;
        background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDk3Ljc2MSA5Ny43NjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDk3Ljc2MSA5Ny43NjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDIuNzYxLDY1LjU5NkgzNC43NVYyYzAtMS4xMDUtMC44OTYtMi0yLTJIMTYuNjJjLTEuMTA0LDAtMiwwLjg5NS0yLDJ2NjMuNTk2SDYuNjA5Yy0wLjc3LDAtMS40NzIsMC40NDMtMS44MDQsMS4xMzcgICAgYy0wLjMzMywwLjY5NS0wLjIzNywxLjUxOSwwLjI0NiwyLjExN2wxOC4wNzYsMjYuOTU1YzAuMzgsMC40NzMsMC45NTMsMC43NDYsMS41NTgsMC43NDZzMS4xNzgtMC4yNzMsMS41NTgtMC43NDZMNDQuMzE5LDY4Ljg1ICAgIGMwLjQ4Mi0wLjYsMC41NzgtMS40MjIsMC4yNDYtMi4xMTdDNDQuMjMzLDY2LjAzOSw0My41MzEsNjUuNTk2LDQyLjc2MSw2NS41OTZ6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTkzLjA0LDk1LjA5OEw3OS43MSw1Ny4zMjRjLTAuMjgyLTAuNzk5LTEuMDM4LTEuMzM0LTEuODg3LTEuMzM0aC0zLjg2Yy0wLjEwNywwLTAuMjEzLDAuMDA4LTAuMzE4LDAuMDI0ICAgIGMtMC4xMDQtMC4wMTgtMC4yMS0wLjAyNC0wLjMxOC0wLjAyNGgtMy43NmMtMC44NDksMC0xLjYwNCwwLjUzNS0xLjg4NywxLjMzNkw1NC40MDMsOTUuMWMtMC4yMTUsMC42MTEtMC4xMiwxLjI4OSwwLjI1NSwxLjgxOCAgICBzMC45ODMsMC44NDQsMS42MzMsMC44NDRoNS43NzNjMC44OCwwLDEuNjU3LTAuNTc0LDEuOTEzLTEuNDE2bDIuNTM2LTguMzI0aDE0LjQxOWwyLjUzNiw4LjMyNCAgICBjMC4yNTYsMC44NDIsMS4wMzMsMS40MTYsMS45MTMsMS40MTZoNS43NzFjMC42NDksMCwxLjI1OC0wLjMxNCwxLjYzMy0wLjg0NEM5My4xNiw5Ni4zODcsOTMuMjU1LDk1LjcwOSw5My4wNCw5NS4wOTh6ICAgICBNNjguOTA1LDgwLjA2NmMyLjM5OC03Ljc3LDQuMDIxLTEzLjE2Niw0LjgyLTE2LjA0MWw0LjkyOCwxNi4wNDFINjguOTA1eiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik04Ny4yOTcsMzQuMDUzSDY5LjQ3OUw4OC40MDcsNi44NDhjMC4yMzMtMC4zMzYsMC4zNTgtMC43MzQsMC4zNTgtMS4xNDNWMi4yODljMC0xLjEwNC0wLjg5Ni0yLTItMkg2MC42OTQgICAgYy0xLjEwNCwwLTIsMC44OTYtMiwydjMuODQ0YzAsMS4xMDUsMC44OTYsMiwyLDJoMTYuNzgyTDU4LjUyMiwzNS4zMDljLTAuMjMzLDAuMzM2LTAuMzU4LDAuNzM0LTAuMzU4LDEuMTQ2djMuNDQxICAgIGMwLDEuMTA1LDAuODk2LDIsMiwyaDI3LjEzNWMxLjEwNCwwLDItMC44OTUsMi0ydi0zLjg0MkM4OS4yOTcsMzQuOTQ3LDg4LjQwMiwzNC4wNTMsODcuMjk3LDM0LjA1M3oiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
    `}
    ${props => props.pin && css`
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZmlsbD0iIzIwMjEyNCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz48L3N2Zz4=);
    `}
    ${props => props.search && css`
        background-image: url(data:image/svg+xml;base64,PHN2ZyBmb2N1c2FibGU9ImZhbHNlIiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6Ij48L3BhdGg+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSI+PC9wYXRoPjwvc3ZnPg==);
    `}
    ${props => props.hamburger && css`
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZvY3VzYWJsZT0iZmFsc2UiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4gPjxwYXRoIGQ9Ik0zIDE4aDE4di0ySDN2MnptMC01aDE4di0ySDN2MnptMC03djJoMThWNkgzeiI+PC9wYXRoPjwvc3ZnPg==);
    `}

    ${props => props.notes && css`
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg>')
    `}
    ${props => props.csv && css`
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"></path></svg>')
    `}
    ${props => props.select && css`
        background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Ny43IDQ4Ny43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODcuNyA0ODcuNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik04MC4yLDYyLjdjLTQuOC00LjgtMTIuNS00LjgtMTcuMy0wLjFDNTgsNjcuNCw1OCw3NS4xLDYyLjgsNzkuOUw5MiwxMDkuM2MyLjMsMi4zLDUuNCwzLjYsOC43LDMuNmwwLDAgICAgYzMuMiwwLDYuMy0xLjMsOC42LTMuNmw4OC45LTg4LjRjNC44LTQuOCw0LjgtMTIuNSwwLjEtMTcuM2MtNC44LTQuOC0xMi41LTQuOC0xNy4zLDBsLTI2LjksMjYuN0MxMzkuOCwxNS41LDExOS45LDcsOTksNyAgICBDNTYuNyw3LDIyLjMsNDEuNCwyMi4zLDgzLjdzMzQuNCw3Ni43LDc2LjcsNzYuN2MzNC4xLDAsNjMuNi0yMS45LDczLjUtNTQuNWMyLTYuNS0xLjctMTMuMy04LjItMTUuM2MtNi41LTEuOS0xMy4zLDEuNy0xNS4zLDguMiAgICBjLTYuNiwyMS44LTI3LjIsMzcuMS01MCwzNy4xYy0yOC44LDAtNTIuMi0yMy40LTUyLjItNTIuMlM3MC4yLDMxLjUsOTksMzEuNWMxNC4zLDAsMjcuOSw2LDM3LjcsMTYuMmwtMzUuOSwzNS43TDgwLjIsNjIuN3oiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNOTksMTcwLjZjLTQyLjMsMC03Ni43LDM0LjQtNzYuNyw3Ni43UzU2LjcsMzI0LDk5LDMyNHM3Ni43LTM0LjQsNzYuNy03Ni43UzE0MS4zLDE3MC42LDk5LDE3MC42eiBNOTksMjk5LjUgICAgYy0yOC44LDAtNTIuMi0yMy40LTUyLjItNTIuMnMyMy40LTUyLjIsNTIuMi01Mi4yczUyLjIsMjMuNCw1Mi4yLDUyLjJTMTI3LjgsMjk5LjUsOTksMjk5LjV6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTE3NS43LDQxMWMwLTQyLjMtMzQuNC03Ni43LTc2LjctNzYuN1MyMi4zLDM2OC43LDIyLjMsNDExczM0LjQsNzYuNyw3Ni43LDc2LjdTMTc1LjcsNDUzLjMsMTc1LjcsNDExeiBNOTksNDYzLjMgICAgYy0yOC44LDAtNTIuMi0yMy40LTUyLjItNTIuMnMyMy40LTUyLjIsNTIuMi01Mi4yczUyLjIsMjMuNCw1Mi4yLDUyLjJTMTI3LjgsNDYzLjMsOTksNDYzLjN6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTQ1My4xLDIzNUgyMTQuOGMtNi44LDAtMTIuMyw1LjUtMTIuMywxMi4zczUuNSwxMi4zLDEyLjMsMTIuM2gyMzguM2M2LjgsMCwxMi4zLTUuNSwxMi4zLTEyLjNTNDU5LjksMjM1LDQ1My4xLDIzNXoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNNDUzLjEsNzEuNUgyMTQuOGMtNi44LDAtMTIuMyw1LjUtMTIuMywxMi4zczUuNSwxMi4zLDEyLjMsMTIuM2gyMzguM2M2LjgsMCwxMi4zLTUuNSwxMi4zLTEyLjNTNDU5LjksNzEuNSw0NTMuMSw3MS41eiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik00NTMuMSwzOTguOEgyMTQuOGMtNi44LDAtMTIuMyw1LjUtMTIuMywxMi4zczUuNSwxMi4zLDEyLjMsMTIuM2gyMzguM2M2LjgsMCwxMi4zLTUuNSwxMi4zLTEyLjMgICAgQzQ2NS40LDQwNC4yLDQ1OS45LDM5OC44LDQ1My4xLDM5OC44eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=)
    `}
    ${props => props.logout && css`
        background-size: 22px 24px;
        background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMjAuMDAyIDMyMC4wMDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyMC4wMDIgMzIwLjAwMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8ZyBpZD0iWE1MSURfNl8iPgoJPHBhdGggaWQ9IlhNTElEXzdfIiBkPSJNNTEuMjEzLDE3NS4wMDFoMTczLjc4NWM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1YzAtOC4yODQtNi43MTYtMTUtMTUtMTVINTEuMjEzbDE5LjM5NC0xOS4zOTQgICBjNS44NTgtNS44NTgsNS44NTgtMTUuMzU1LDAtMjEuMjEzYy01Ljg1Ny01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzLDBMNC4zOTYsMTQ5LjM5M2MtMC4zNTEsMC4zNTEtMC42ODMsMC43MTktMC45OTcsMS4xMDMgICBjLTAuMTM3LDAuMTY3LTAuMjU2LDAuMzQ0LTAuMzg1LDAuNTE1Yy0wLjE2NSwwLjIyLTAuMzM1LDAuNDM1LTAuNDg4LDAuNjY0Yy0wLjE0LDAuMjA5LTAuMjYxLDAuNDI2LTAuMzg5LDAuNjQgICBjLTAuMTIzLDAuMjA2LTAuMjUyLDAuNDA3LTAuMzY1LDAuNjE5Yy0wLjExOCwwLjIyLTAuMjE3LDAuNDQ2LTAuMzIzLDAuNjdjLTAuMTA0LDAuMjE5LTAuMjEzLDAuNDM1LTAuMzA2LDAuNjU5ICAgYy0wLjA5LDAuMjE5LTAuMTY0LDAuNDQyLTAuMjQzLDAuNjY0Yy0wLjA4NywwLjI0LTAuMTc5LDAuNDc3LTAuMjUzLDAuNzIyYy0wLjA2NywwLjIyMi0wLjExNiwwLjQ0Ny0wLjE3MiwwLjY3MiAgIGMtMC4wNjMsMC4yNDktMC4xMzMsMC40OTctMC4xODMsMC43NTFjLTAuMDUxLDAuMjU5LTAuMDgyLDAuNTIxLTAuMTE5LDAuNzgyYy0wLjAzMiwwLjIyMy0wLjA3NSwwLjQ0My0wLjA5NywwLjY2OSAgIGMtMC4wNDgsMC40ODQtMC4wNzMsMC45NzEtMC4wNzQsMS40NTdjMCwwLjAwNy0wLjAwMSwwLjAxNS0wLjAwMSwwLjAyMmMwLDAuMDA3LDAuMDAxLDAuMDE1LDAuMDAxLDAuMDIyICAgYzAuMDAxLDAuNDg3LDAuMDI2LDAuOTczLDAuMDc0LDEuNDU4YzAuMDIyLDAuMjIzLDAuMDY0LDAuNDQsMC4wOTUsMC42NjFjMC4wMzgsMC4yNjQsMC4wNjksMC41MjgsMC4xMjEsMC43OSAgIGMwLjA1LDAuMjUyLDAuMTE5LDAuNDk2LDAuMTgyLDAuNzQzYzAuMDU3LDAuMjI3LDAuMTA3LDAuNDU2LDAuMTc1LDAuNjgxYzAuMDczLDAuMjQxLDAuMTY0LDAuNDc0LDAuMjQ4LDAuNzEgICBjMC4wODEsMC4yMjYsMC4xNTUsMC40NTMsMC4yNDcsMC42NzVjMC4wOTEsMC4yMiwwLjE5OCwwLjQzMSwwLjMsMC42NDZjMC4xMDgsMC4yMjksMC4yMSwwLjQ2LDAuMzMsMC42ODUgICBjMC4xMSwwLjIwNSwwLjIzNSwwLjQsMC4zNTQsMC41OTljMC4xMzEsMC4yMjEsMC4yNTYsMC40NDQsMC40LDAuNjU5YzAuMTQ2LDAuMjE5LDAuMzA5LDAuNDI0LDAuNDY2LDAuNjM1ICAgYzAuMTM2LDAuMTgxLDAuMjYyLDAuMzY4LDAuNDA3LDAuNTQ0YzAuMjk5LDAuMzY0LDAuNjE2LDAuNzEzLDAuOTQ3LDEuMDQ4YzAuMDE2LDAuMDE2LDAuMDI5LDAuMDM0LDAuMDQ1LDAuMDVsNDUsNDUuMDAxICAgYzIuOTMsMi45MjksNi43NjgsNC4zOTQsMTAuNjA3LDQuMzk0YzMuODM4LTAuMDAxLDcuNjc4LTEuNDY1LDEwLjYwNi00LjM5M2M1Ljg1OC01Ljg1OCw1Ljg1OC0xNS4zNTUsMC4wMDEtMjEuMjEzTDUxLjIxMywxNzUuMDAxICAgeiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggaWQ9IlhNTElEXzhfIiBkPSJNMzA1LjAwMiwyNWgtMTkwYy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1djYwYzAsOC4yODQsNi43MTYsMTUsMTUsMTVzMTUtNi43MTYsMTUtMTVWNTVoMTYwdjIxMC4wMDFoLTE2MCAgIHYtNDUuMDAxYzAtOC4yODQtNi43MTYtMTUtMTUtMTVzLTE1LDYuNzE2LTE1LDE1djYwLjAwMWMwLDguMjg0LDYuNzE2LDE1LDE1LDE1aDE5MGM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1VjQwICAgQzMyMC4wMDIsMzEuNzE2LDMxMy4yODYsMjUsMzA1LjAwMiwyNXoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)
    `}
    ${props => props.checkBox && css`
        background-image: url(data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0eiIvPjxwYXRoIGQ9Ik0xOCA5bC0xLjQtMS40LTYuNiA2LjYtMi42LTIuNkw2IDEzbDQgNHoiLz48L3N2Zz4=)
    `}
    ${props => props.brush && css`
        background-image: url(data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTguNjQgNC43NUwyMCA2LjExbC03Ljc5IDcuNzktMS4zNi0xLjM2IDcuNzktNy43OW0wLTJjLS41MSAwLTEuMDIuMi0xLjQxLjU5bC03Ljc5IDcuNzljLS43OC43OC0uNzggMi4wNSAwIDIuODNsMS4zNiAxLjM2Yy4zOS4zOS45LjU5IDEuNDEuNTkuNTEgMCAxLjAyLS4yIDEuNDEtLjU5bDcuNzktNy43OWMuNzgtLjc4Ljc4LTIuMDUgMC0yLjgzbC0xLjM1LTEuMzVjLS4zOS0uNC0uOS0uNi0xLjQyLS42ek03IDE0LjI1Yy0xLjY2IDAtMyAxLjM0LTMgMyAwIDEuMzEtMS4xNiAyLTIgMiAuOTIgMS4yMiAyLjQ5IDIgNCAyIDIuMjEgMCA0LTEuNzkgNC00IDAtMS42Ni0xLjM0LTMtMy0zeiIvPjwvc3ZnPg==)
    `}
    ${props => props.image && css`
        background-image: url(data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0em0tNS03bC0zIDMuNzJMOSAxM2wtMyA0aDEybC00LTV6Ii8+PC9zdmc+)
    `}
`;