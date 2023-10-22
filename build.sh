#!/usr/bin/env bash
# exit on error
set -o errexit

pip install -r ./featuraapi/requirements.txt

python ./featuraapi/manage.py collectstatic --no-input
python ./featuraapi/manage.py migrate