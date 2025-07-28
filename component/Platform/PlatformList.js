import { useEffect, useState } from "react";
import PlatformCard from "./PlatformCard";
import { platforms } from "./platformsData";
import {
  ListWrapper,
  SectionTitle,
  PageWrapper,
  SearchInput,
  SectionDescription,
  CardBox,
  SearchWrapper,
  SearchIcon,
  InputWrapper,
} from "./Platform.styles";

const PlatformList = () => {
  const [search, setSearch] = useState("");

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const filteredPlatforms = platforms.filter((platform) =>
    platform.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageWrapper>
      <div style={{ marginBottom: 24 }}>
        <SectionTitle>Platforms</SectionTitle>
        <SectionDescription>
          Select a platform you are using to continue
        </SectionDescription>
      </div>

      {isMobile && (
        <InputWrapper>
          <SearchWrapper>
            <SearchIcon src="/activate/activate-search.svg" alt="search" />
            <SearchInput
              type="text"
              placeholder="Search platform"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchWrapper>
        </InputWrapper>
      )}

      <CardBox>
        {!isMobile && (
          <InputWrapper>
            <SearchWrapper>
              <SearchIcon src="/activate/activate-search.svg" alt="search" />
              <SearchInput
                type="text"
                placeholder="Search platform"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </SearchWrapper>
          </InputWrapper>
        )}
        <ListWrapper>
          {filteredPlatforms.map((platform, index) => (
            <PlatformCard
              key={platform.name}
              name={platform.name}
              icon={platform.icon}
              color={platform.color}
              url={platform.url}
              background={index % 2 === 1 ? "#F5F5F8" : "#FFFFFF"}
            />
          ))}
        </ListWrapper>
      </CardBox>
    </PageWrapper>
  );
};

export default PlatformList;
