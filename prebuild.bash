#!/bin/bash

jar_filename='xslt-debug-adapter-0.1.1-all.jar'

xslt_debug_root="../xslt-debug-adapter"
jar_path="${xslt_debug_root}/build/libs/${jar_filename}"

function die() {
	echo "*****" 1>&2
	echo "* $1" 1>&2
	exit 111
}

[[ -d "${xslt_debug_root}" ]] || die "Make sure you clone https://github.com/philschatz/xslt-debug-adapter to a directory next to this one"
[[ -f "${jar_path}" ]] || die "Make sure you run the build instructions in xslt-debug-adapter to generate a '${jar_filename}' file (or update this file to copy a new version)"
[[ -d "./server" ]] || mkdir "./server/" || die "Could not create the ./server/ directory"

cp "${jar_path}" ./server/ || die "Could not copy the jar file into the ./server/ directory"