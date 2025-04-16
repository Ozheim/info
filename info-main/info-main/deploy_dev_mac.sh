# Any subsequent(*) commands which fail will cause the shell script to exit immediately
set -e

################################################################################
# Help                                                                         #
################################################################################
Help() {
  # Display Help
  echo "#####################################################################################################"
  echo "#"
  echo "#                                    DEPLOY_DEV.SH"
  echo "#"
  echo "# This script allow izidoor developpers to launch izidoor locally on mac OS with ease."
  echo "#"
  echo "#####################################################################################################"
  echo ""
  echo
  echo "Syntax: deploy_dev_mac [h]"
  echo "options:"
  echo "h     Print this Help."
  echo
}

################################################################################
################################################################################
# Main program                                                                 #
################################################################################
################################################################################

echo "--------------------------------------------------"
echo "ENABLED OPTIONS:"
while getopts "sciph" option; do
  case $option in
  h)
    echo "   -h: display help"
    Help
    exit
    ;;
  ?)
    exit 1
    ;;
  esac
done
echo "--------------------------------------------------"
echo ""


echo "--------------------------------------------------"
echo "Generating static routes..."
yarn generate
echo "...DONE"
echo "--------------------------------------------------"

echo "--------------------------------------------------"
echo "Start local server..."
npx serve -p 3001 .output/public

