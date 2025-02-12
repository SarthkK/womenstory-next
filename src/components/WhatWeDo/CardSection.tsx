import React from "react";
import Card from "./Card";
import { BookOpenText, House, Network, Users } from "lucide-react";

function CardSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-14 gap-6">
      <Card
        title="Inclusivity"
        content="We ensure that our initiatives are inclusive, providing a platform for women from diverse backgrounds, cultures, and social statuses.
          Additionally, our programs engage men and children to broaden
          awareness and understanding of women&pos;s issues across all
          demographics."
        icon={<House className="text-primary" height={100} width={400} />}
      />
      <Card
        title="Accessibility"
        content="By breaking down barriers, we aim to reach women even in remote and underserved areas, providing them with the tools and support they need to thrive."
        icon={<Network className="text-primary" height={100} width={400} />}
      />
      <Card
        title="Education and Awareness"
        content="Our tailored educational initiatives, including workshops, seminars, and training sessions, are designed to educate women about their rights, opportunities, and potential. By empowering them with knowledge, we enable informed decision-making and advocacy within their communities. "
        icon={
          <BookOpenText className="text-primary" height={100} width={400} />
        }
      />
      <Card
        title="Community building"
        content="By hosting events, both online and offline, we give a platform to women and encourage them to share their ideas and experiences and support each other in their diverse experiences."
        icon={<Users className="text-primary" height={100} width={400} />}
      />
    </div>
  );
}

export default CardSection;
