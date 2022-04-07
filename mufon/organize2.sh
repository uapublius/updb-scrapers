#!/bin/bash

target=$1

for file in $target/*; do
  id=$(echo "$file" | sed -r 's/^[^0-9]*([0-9]+-[0-9]+-[0-9]+).*/\1/')

  case $id in
  '') continue ;;
  esac

  if [ ! -d "$target/$id" ]; then
    mkdir "$target/$id"
  fi

  if [[ "$file" == "$target/$id" ]]; then
    continue
  fi

  echo $id

  mv ""$file"" ""$target/$id""
done
