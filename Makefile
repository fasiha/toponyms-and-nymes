index.html: README.md header.html
	cp header.html index.html&& pandoc --no-highlight -f markdown_github-hard_line_breaks+markdown_in_html_blocks+implicit_figures-ascii_identifiers -t html5 README.md  >> index.html