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
    title: "Best Drug Rehab Center in Patna with Old Age Home Care",
    description:
      "Navkiran Seva Sadan offers a reliable Drug Rehab Center in Patna and an old-age home for compassionate care and rehabilitation, ensuring a healthier, dignified life.",
    keywords:
      "Drug Rehab Center in Patna, Drug De Addiction Center in Patna, best old age home in Patna, Rehabilitation Center in Patna, Luxury old age home in Patna",
    ogDescription:
      "Navkiran Seva Sadan offers a reliable Drug Rehab Center in Patna and an old-age home for compassionate care and rehabilitation, ensuring a healthier, dignified life.",
    twitterDescription:
      "Navkiran Seva Sadan offers a reliable Drug Rehab Center in Patna and an old-age home for compassionate care and rehabilitation, ensuring a healthier, dignified life.",
    url: absoluteUrl("/"),
    siteName: "navkiransevasadan",
    image: heroImage,
    imageAlt: "Best Drug Rehab Center in Patna",
    schema: commonSchema,
  },
  about: {
    title: "About the Affordable Rehab Center in Patna: Navkiran Seva Sadan",
    description:
      "Discover Navkiran Seva Sadan, an affordable Rehab Center in Patna, with an old-age home care, committed to compassionate care, recovery, and overall well-being.",
    keywords: "Affordable Rehab Center in Patna,  Rehabilitation Center in Patna,  best old age home in Patna",
    ogDescription:
      "Discover Navkiran Seva Sadan, an affordable Rehab Center in Patna, with an old-age home care, committed to compassionate care, recovery, and overall well-being.",
    twitterDescription:
      "Discover Navkiran Seva Sadan, an affordable Rehab Center in Patna, with an old-age home care, committed to compassionate care, recovery, and overall well-being.",
    url: absoluteUrl("/about"),
    siteName: "https://navkiransevasadan.com/about",
    image: aboutImage,
    imageAlt: "Best Drug Rehab Center in Patna",
    schema: commonSchema,
  },
  nashaMuktiKendra: {
    title: "Nasha Mukti Kendra near me, You Can Trust |Navkiran Seva Sadan",
    description:
      "Exploring the best nasha mukti kendra near me. Well, at Navkiran Seva Sadan, we provide safe rehabilitation, 24/7 care, and counseling for lasting recovery. ",
    keywords:
      " nasha mukti kendra near me, rehab center in Patna, De addiction Center in Patna, Alcohol Rehab Center near me,  best rehab center near me",
    ogDescription:
      "Exploring the best nasha mukti kendra near me. Well, at Navkiran Seva Sadan, we provide safe rehabilitation, 24/7 care, and counseling for lasting recovery. ",
    twitterDescription:
      "Exploring the best nasha mukti kendra near me. Well, at Navkiran Seva Sadan, we provide safe rehabilitation, 24/7 care, and counseling for lasting recovery. ",
    url: absoluteUrl("/nasha-mukti-kendra"),
    siteName: "navkiransevasadan.com/nasha-mukti-kendra",
    image: rehabCenterImage,
    imageAlt: "Nasha Mukti Kendra near me",
    schema: commonSchema,
  },
  adultHomeCare: {
    title: "Care for Your Loved Ones with Affordable Old Age Home in Patna",
    description:
      " Provide your elders with the care they deserve. Our affordable old age home in Patna ensures safety, comfort, and compassionate care for a peaceful and respectful life.",
    keywords: "Affordable old age home in Patna, Senior Citizen Home in Patna, senior care home in Patn",
    ogDescription:
      " Provide your elders with the care they deserve. Our affordable old age home in Patna ensures safety, comfort, and compassionate care for a peaceful and respectful life.",
    twitterDescription:
      " Provide your elders with the care they deserve. Our affordable old age home in Patna ensures safety, comfort, and compassionate care for a peaceful and respectful life.",
    url: absoluteUrl("/adult-home-care"),
    siteName: "navkiransevasadan.com/adult-home-care",
    image: adultCareImage,
    imageAlt: "Care for Your Loved Ones with Affordable Old Age Home in Patna ",
    schema: commonSchema,
  },
} satisfies Record<string, SeoProps>;
