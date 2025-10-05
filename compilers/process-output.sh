#!/usr/bin/env bash

output_folder="./dist/AppName-linux-x64"
echo "Moving binary to new path"
mv "${output_folder}/AppName" "${output_folder}/binary"
echo "Creating new launcher file"
cp "./compilers/launcher.sh" "${output_folder}/AppName"
echo "Done!"