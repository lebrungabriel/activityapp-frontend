// Function to get the image URL based on the category
export const getImageUrl = (category: string): string => {
  // Check the category and return the corresponding image URL
  if (category === "Randonnée") {
    return "https://conseilsante.cliniquecmi.com/wp-content/uploads/2022/05/bienfait-randonnee-conseil-sante.jpg";
  } else if (category === "Yoga") {
    return "https://cdn.generationvoyage.fr/2019/11/yoga-france-meilleurs-endroits-de-retraite.jpg";
  } else if (category === "Vélo") {
    return "https://www.caravelis.com/xml/oi/TFO415621471835/TFO415621471835-17a/medias/jpg/photo-vttae-1_w2000.jpg";
  } else if (category === "Trail") {
    return "https://magazine.sportihome.com/wp-content/uploads/2019/05/Trail-autour-de-Paris-Ile-de-France.jpg";
  } else if (category === "Surf") {
    return "https://cdn.checkyeti.com/images/original/Surfing+%28c%29+Shutterstock.jpg";
  } else if (category === "Escalade") {
    return "https://ecolosport.fr/wp-content/uploads/2020/07/Escalade.jpg";
  } else {
    // Return an empty string if the category is not recognized
    // This can be used to handle cases where the category doesn't match any predefined options.
    return "";
  }
};
