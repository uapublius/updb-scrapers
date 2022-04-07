#!/bin/bash

myUrls=("http://www.cufos.org" "http://www.cufos.org/ahendry.html" "http://www.cufos.org/Akualele_Research_Group/" "http://www.cufos.org/APRO_Bulletin/" "http://www.cufos.org/barry_greenwood.html" "http://www.cufos.org/bmurphy.html" "http://www.cufos.org/bookreviews.html" "http://www.cufos.org/books/Catalogue_of_200_Type_I_UFO_Events_in_Spain_and_Portugal.pdf" "http://www.cufos.org/bullard.html" "http://www.cufos.org/cases/1948_01_07_US_KY_Franklin_Moore_Mantell_a.pdf" "http://www.cufos.org/cases/1948_01_07_US_KY_Franklin_Moore_Mantell_b.pdf" "http://www.cufos.org/cases/1948_01_07_US_KY_Franklin_Moore_Mantell_c.pdf" "http://www.cufos.org/cases/1948_01_07_US_KY_Franklin_Moore_Mantell_d.pdf" "http://www.cufos.org/cases/1965_06_04_SP_NICAP_McDivitt.pdf" "http://www.cufos.org/cases/1965_09_03_US_NH_Exeter_NICAP_MultiWit_TranscriptsR_PartI.pdf" "http://www.cufos.org/cases/1965_09_03_US_NH_Exeter_NICAP_MultiWit_TranscriptsR_PartII.pdf" "http://www.cufos.org/cases/1965_09_03_US_NH_Exeter_NICAP_MultiWit.pdf" "http://www.cufos.org/cases/1966_03_20-21_US_MI_Dexter-Hillsdale_CUFOS_MultiWit_NLr.pdf" "http://www.cufos.org/CIQ/" "http://www.cufos.org/clark.html" "http://www.cufos.org/Cosmic_News/" "http://www.cufos.org/CSI_NY/" "http://www.cufos.org/CUFORN/" "http://www.cufos.org/CUFOS_Associate_Newsletter/" "http://www.cufos.org/Data-Net/" "http://www.cufos.org/donations.html" "http://www.cufos.org/eberhart.html" "http://www.cufos.org/FAQ_English_index.html" "http://www.cufos.org/FAQ_French_index.html" "http://www.cufos.org/FAQ_German_index.html" "http://www.cufos.org/FAQ_Italian_index.html" "http://www.cufos.org/FAQ_Portuguese_index.html" "http://www.cufos.org/FAQ_Spanish_index.html" "http://www.cufos.org/feindt.html" "http://www.cufos.org/Flying_Saucer_Digest/" "http://www.cufos.org/fowler.html" "http://www.cufos.org/fridge.html" "http://www.cufos.org/FSN_SRB/" "http://www.cufos.org/gross.html" "http://www.cufos.org/GSW-Bulletin/" "http://www.cufos.org/hall.html" "http://www.cufos.org/HUMCAT/" "http://www.cufos.org/Hynekbio.html" "http://www.cufos.org/images/Hynek_Photos.pdf" "http://www.cufos.org/index.html" "http://www.cufos.org/JAldrich.html" "http://www.cufos.org/jcarpenter.html" "http://www.cufos.org/jrandles.html" "http://www.cufos.org/kaeser.html" "http://www.cufos.org/krandle.html" "http://www.cufos.org/ledger.html" "http://www.cufos.org/Little_Listening_Post/" "http://www.cufos.org/maccabee.html" "http://www.cufos.org/mark_rodeghier.html" "http://www.cufos.org/Nexus/" "http://www.cufos.org/NICAP_Youth_Council" "http://www.cufos.org/Orbit/" "http://www.cufos.org/pdean.html" "http://www.cufos.org/pdfs/1967_01_12_AF_PanelBriefing.pdf" "http://www.cufos.org/pdfs/2013_07_14_US_IL_Whats-that-in-the-Sky-Ask-CUFOS_Chicago-Tribune_NewsClip.pdf" "http://www.cufos.org/pdfs/airforce.pdf" "http://www.cufos.org/pdfs/astronomy.pdf" "http://www.cufos.org/pdfs/BB_Unknowns-1.26.pdf" "http://www.cufos.org/pdfs/boldman.pdf" "http://www.cufos.org/pdfs/ce3k.pdf" "http://www.cufos.org/pdfs/cia_ufos_are_U2s.pdf" "http://www.cufos.org/pdfs/cometa.pdf" "http://www.cufos.org/pdfs/gepan.pdf" "http://www.cufos.org/pdfs/hastings.pdf" "http://www.cufos.org/pdfs/i_remember_blue-book.pdf" "http://www.cufos.org/pdfs/IUR_article1.pdf" "http://www.cufos.org/pdfs/IUR_article3.pdf" "http://www.cufos.org/pdfs/Lockheed%20case%20dec%2016%201953.pdf" "http://www.cufos.org/pdfs/missiles.pdf" "http://www.cufos.org/pdfs/Phenomena_in_USSR_A-548.pdf" "http://www.cufos.org/pdfs/pilotsrpt.pdf" "http://www.cufos.org/pdfs/randles.pdf" "http://www.cufos.org/pdfs/rullan.pdf" "http://www.cufos.org/pdfs/sighting_report.pdf" "http://www.cufos.org/pdfs/swords.pdf" "http://www.cufos.org/pdfs/swords2.pdf" "http://www.cufos.org/pdfs/taylor.pdf" "http://www.cufos.org/pdfs/the_senator.pdf" "http://www.cufos.org/pdfs/TheLockheedUFOCase.pdf" "http://www.cufos.org/pdfs/timmerman.pdf" "http://www.cufos.org/pdfs/ubatuba_residue.pdf" "http://www.cufos.org/pdfs/UFO_Documents_internet.pdf" "http://www.cufos.org/pdfs/ufo_shapes.pdf" "http://www.cufos.org/pdfs/YOU_WANT_TO_BE_A_UFOLOGIST.PDF" "http://www.cufos.org/reid.html" "http://www.cufos.org/related.html" "http://www.cufos.org/rhaines.html" "http://www.cufos.org/rheiden.html" "http://www.cufos.org/Roundhouse/" "http://www.cufos.org/rpowell.html" "http://www.cufos.org/Saucerian/" "http://www.cufos.org/schuessler.html" "http://www.cufos.org/shough.html" "http://www.cufos.org/Skeptical_Successes_Ufological_Failures.html" "http://www.cufos.org/SPACE_Gariety/" "http://www.cufos.org/swords.html" "http://www.cufos.org/tprinty.html" "http://www.cufos.org/tulien.html" "http://www.cufos.org/UFO_History_Gross/" "http://www.cufos.org/UFOI_and_Selected_Documents/" "http://www.cufos.org/URANUS/" "http://www.cufos.org/vallee.html" "http://www.cufos.org/Vimana/" "http://www.cufos.org/vjolmos.html" "http://www.cufos.org/Washington_State/Washington_State_NICAP_Subcommittee_Newsletter.pdf" "http://www.milonic.com/")

for url in ${myUrls[@]}; do
  echo "$url"
  wget -e robots=off --mirror --no-clobber --page-requisites --adjust-extension --convert-links "$url"
done
