#!/usr/bin/env bash

output_folder="./dist/GastroTracker-linux-x64"
echo "Moving binary to new path"
mv "${output_folder}/GastroTracker" "${output_folder}/binary"
echo "Creating new launcher file"
cp "./compilers/launcher.sh" "${output_folder}/GastroTracker"
echo "Done!"