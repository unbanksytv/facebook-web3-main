import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Mark",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/xql",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezon",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex items-center space-x-3 mx-auto scrollbar-hide">
      {stories.map((story) => (
        <StoryCard
          key={story.name}
          name={story.name}
          profile={story.profile}
          src={story.src}
        />
      ))}
    </div>
  );
}

export default Stories;