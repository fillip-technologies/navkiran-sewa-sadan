import type { SeoProps } from "@/components/Seo";

const SITE_URL = "https://navkiransevasadan.com";

const absoluteUrl = (path: string) => new URL(path, `${SITE_URL}/`).toString();

const heroImage = absoluteUrl("/assets/hero-image-MQFlV5GI.jpg");
const aboutImage = absoluteUrl("/assets/about-team-DKXjCaBC.jpg");
const rehabCenterImage = absoluteUrl("/assets/rehab-center-D8jO26bZ.jpg");
const adultCareImage = absoluteUrl("/assets/adult-care-DupMQiUQ.jpg");

const sameAs = [
  "https://www.facebook.com/profile.php?id=61588832498821",
  "https://www.instagram.com/navkiransevasadan/?hl=en",
  "https://www.youtube.com/@NavKiranSevasadan",
];

const commonSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Navkiran Seva Sadan",
    url: absoluteUrl("/"),
    logo: "",
    sameAs,
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Navkiran Seva Sadan",
    image: heroImage,
    "@id": "",
    url: absoluteUrl("/"),
    telephone: "9955901593",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Navkiran Seva Sadan, India",
      addressLocality: "Patna, Bihar,",
      postalCode: "800026",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.59321282826129,
      longitude: 85.18520865581908,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs,
  },
];

export const seoData = {
  home: {
    title: "पटना में नशा मुक्ति केंद्र एवं वृद्धाश्रम: नवकिरण सेवा सदन",
    description:
      "नवकिरण सेवा सदन पटना में नशा मुक्ति केंद्र और बुजुर्ग देखभाल सेवाएं प्रदान करने के लिए विख्यात है। यहाँ सुरक्षित वातावरण, स्नेहपूर्ण देखभाल और विशेषज्ञ सहायता उपलब्ध हैं।",
    keywords:
      "पटना में नशा मुक्ति केंद्र, पटना नशा इलाज केंद्र, बिहार नशा मुक्ति सेवा केंद्र, पटना ड्रग रिहैब सेंटर",
    ogDescription:
      "नवकिरण सेवा सदन पटना में नशा मुक्ति केंद्र और बुजुर्ग देखभाल सेवाएं प्रदान करने के लिए विख्यात है। यहाँ सुरक्षित वातावरण, स्नेहपूर्ण देखभाल और विशेषज्ञ सहायता उपलब्ध हैं।",
    twitterDescription:
      "नवकिरण सेवा सदन पटना में नशा मुक्ति केंद्र और बुजुर्ग देखभाल सेवाएं प्रदान करने के लिए विख्यात है। यहाँ सुरक्षित वातावरण, स्नेहपूर्ण देखभाल और विशेषज्ञ सहायता उपलब्ध हैं।",
    url: absoluteUrl("/"),
    siteName: "navkiransevasadan",
    image: heroImage,
    imageAlt: "पटना में नशा मुक्ति केंद्र एवं वृद्धाश्रम",
    schema: commonSchema,
  },
  about: {
    title: "हमारे बारे में | बिहार नशा मुक्ति सेवा केंद्र और वृद्धाश्रम",
    description:
      "नवकिरण सेवा सदन एक विश्वसनीय बिहार नशा मुक्ति सेवा केंद्र और वृद्धाश्रम है, जो करुणामय देखभाल, पुनर्वास और दीर्घकालिक सुधार के लिए समर्पित है।",
    keywords: "बिहार नशा मुक्ति सेवा केंद्र, नशा छोड़ने का हॉस्पिटल पटना",
    ogDescription:
      "नवकिरण सेवा सदन एक विश्वसनीय बिहार नशा मुक्ति सेवा केंद्र और वृद्धाश्रम है, जो करुणामय देखभाल, पुनर्वास और दीर्घकालिक सुधार के लिए समर्पित है।",
    twitterDescription:
      "नवकिरण सेवा सदन एक विश्वसनीय बिहार नशा मुक्ति सेवा केंद्र और वृद्धाश्रम है, जो करुणामय देखभाल, पुनर्वास और दीर्घकालिक सुधार के लिए समर्पित है।",
    url: absoluteUrl("/about"),
    siteName: "https://navkiransevasadan.com/about",
    image: aboutImage,
    imageAlt: "बिहार नशा मुक्ति सेवा केंद्र और वृद्धाश्रम",
    schema: commonSchema,
  },
  nashaMuktiKendra: {
    title: "विश्वसनीय पटना ड्रग रिहैब सेंटर - नवकिरण सेवा सदन",
    description:
      "नशे की लत से मुक्ति के लिए पटना में भरोसेमंद पटना ड्रग रिहैब सेंटर। काउंसलिंग, डिटॉक्स, पुनर्वास और आफ्टरकेयर सेवाओं के साथ बेहतर जीवन की शुरुआत करें।",
    keywords:
      "पटना में नशा मुक्ति केंद्र, नशा मुक्ति अस्पताल पटना, पटना ड्रग रिहैब सेंटर",
    ogDescription:
      "नशे की लत से मुक्ति के लिए पटना में भरोसेमंद पटना ड्रग रिहैब सेंटर। काउंसलिंग, डिटॉक्स, पुनर्वास और आफ्टरकेयर सेवाओं के साथ बेहतर जीवन की शुरुआत करें।",
    twitterDescription:
      "नशे की लत से मुक्ति के लिए पटना में भरोसेमंद पटना ड्रग रिहैब सेंटर। काउंसलिंग, डिटॉक्स, पुनर्वास और आफ्टरकेयर सेवाओं के साथ बेहतर जीवन की शुरुआत करें।",
    url: absoluteUrl("/nasha-mukti-kendra"),
    siteName: "navkiransevasadan.com/nasha-mukti-kendra",
    image: rehabCenterImage,
    imageAlt: "विश्वसनीय पटना ड्रग रिहैब सेंटर",
    schema: commonSchema,
  },
  adultHomeCare: {
    title: "बुजुर्ग देखभाल सेवा एवं उत्कृष्ट पटना नशा इलाज केंद्र",
    description:
      "पटना में विश्वसनीय वृद्धाश्रम और पटना नशा इलाज केंद्र। नवकिरण सेवा सदन में 24/7 देखभाल, चिकित्सा सहायता, आरामदायक वातावरण और करुणामय सेवा के साथ बुजुर्गों की बेहतर देखभाल।",
    keywords: "पटना में एडिक्शन काउंसलिंग, पटना नशा इलाज केंद्र",
    ogDescription:
      "पटना में विश्वसनीय वृद्धाश्रम और पटना नशा इलाज केंद्र। नवकिरण सेवा सदन में 24/7 देखभाल, चिकित्सा सहायता, आरामदायक वातावरण और करुणामय सेवा के साथ बुजुर्गों की बेहतर देखभाल।",
    twitterDescription:
      "पटना में विश्वसनीय वृद्धाश्रम और पटना नशा इलाज केंद्र। नवकिरण सेवा सदन में 24/7 देखभाल, चिकित्सा सहायता, आरामदायक वातावरण और करुणामय सेवा के साथ बुजुर्गों की बेहतर देखभाल।",
    url: absoluteUrl("/adult-home-care"),
    siteName: "navkiransevasadan.com/adult-home-care",
    image: adultCareImage,
    imageAlt: "बुजुर्ग देखभाल सेवा एवं पटना नशा इलाज केंद्र",
    schema: commonSchema,
  },
} satisfies Record<string, SeoProps>;
