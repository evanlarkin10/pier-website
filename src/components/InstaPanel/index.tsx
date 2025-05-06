import { useEffect, useState } from "react";
import Image from "next/image";
//import styles from "./InstaPanel.module.css";
import Text from "../Text";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  caption: string;
}

//curl -X GET "https://graph.instagram.com/9538952662806844/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=IGAAJuXPCtwlZABZAE01MFk3YlREaUhfYUhTa3pmWFQxeEQzU1BMVjF0OEotNWo4ejdubmNjbXJncHZAGbFRBSFNJdTI1eU1vRXlHYXFYWUxmaHJzRHV0ajZAZAMTZAYTXZAIV19yLW0zbVFMclRocnc1WkQ4aWd4S3JLcnBwNmpTQlZAOZAwZDZD&limit=1"
const InstaPanel = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [expandedCaptions, setExpandedCaptions] = useState<Set<string>>(
    new Set()
  );

  // Replace these with your Instagram Business Account credentials
  const ACCESS_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
  const BUSINESS_ACCOUNT_ID = process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT_ID;

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/${BUSINESS_ACCOUNT_ID}/media?fields=id,media_url,permalink,timestamp,caption&access_token=${ACCESS_TOKEN}&limit=3`
        );
        const data = await response.json();
        console.log(data);
        setPosts(data.data);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };

    fetchInstagramPosts();
  }, [ACCESS_TOKEN, BUSINESS_ACCOUNT_ID]);

  return (
    <>
      {!!posts.length && (
        <div className="flex flex-col gap-0">
          <div className="flex flex-col gap-2 text-center">
            <Text variant="h4" additionalClasses="text-center">
              What&apos;s New?
            </Text>
            <Text variant="p" additionalClasses="text-center">
              Check us out on instagram
            </Text>
          </div>
          <div className="w-full max-w-md mx-auto p-4">
            <div className="grid grid-cols-1 gap-4">
              {posts.map((post) => (
                <a
                  key={post.id}
                  href="https://www.instagram.com/innatthepier" // Replace with your Instagram profile URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-3 flex items-center justify-between border-b">
                      <div className="flex items-center">
                        <div className="w-8 h-8 relative rounded-full overflow-hidden">
                          <Image
                            src="/InstaProfile.jpg"
                            alt="Inn at the Pier Instagram profile picture"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="ml-2 font-semibold text-sm">
                          innatthepier
                        </span>
                      </div>
                      <svg
                        aria-label="Instagram"
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.982c2.937 0 3.285.011 4.445.064 1.072.049 1.655.228 2.042.379.513.2.88.437 1.265.822.385.385.622.752.822 1.265.151.387.33.97.379 2.042.053 1.16.064 1.508.064 4.445 0 2.937-.011 3.285-.064 4.445-.049 1.072-.228 1.655-.379 2.042-.2.513-.437.88-.822 1.265-.385.385-.752.622-1.265.822-.387.151-.97.33-2.042.379-1.16.053-1.508.064-4.445.064-2.937 0-3.285-.011-4.445-.064-1.072-.049-1.655-.228-2.042-.379-.513-.2-.88-.437-1.265-.822-.385-.385-.622-.752-.822-1.265-.151-.387-.33-.97-.379-2.042-.053-1.16-.064-1.508-.064-4.445 0-2.937.011-3.285.064-4.445.049-1.072.228-1.655.379-2.042.2-.513.437-.88.822-1.265.385-.385.752-.622 1.265-.822.387-.151.97-.33 2.042-.379 1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066-1.171.054-1.97.24-2.67.512-.724.281-1.339.657-1.951 1.27-.613.612-.989 1.227-1.27 1.951-.272.7-.458 1.499-.512 2.67C1.013 8.638 1 9.013 1 12s.013 3.362.066 4.535c.054 1.171.24 1.97.512 2.67.281.724.657 1.339 1.27 1.951.612.613 1.227.989 1.951 1.27.7.272 1.499.458 2.67.512C8.638 22.987 9.013 23 12 23s3.362-.013 4.535-.066c1.171-.054 1.97-.24 2.67-.512.724-.281 1.339-.657 1.951-1.27.613-.612.989-1.227 1.27-1.951.272-.7.458-1.499.512-2.67.053-1.173.066-1.548.066-4.535s-.013-3.362-.066-4.535c-.054-1.171-.24-1.97-.512-2.67-.281-.724-.657-1.339-1.27-1.951-.612-.613-1.227-.989-1.951-1.27-.7-.272-1.499-.458-2.67-.512C15.362 1.013 14.987 1 12 1zm0 5.351c-3.121 0-5.649 2.528-5.649 5.649S8.879 17.649 12 17.649s5.649-2.528 5.649-5.649S15.121 6.351 12 6.351zm0 9.316c-2.027 0-3.667-1.64-3.667-3.667S9.973 8.333 12 8.333s3.667 1.64 3.667 3.667-1.64 3.667-3.667 3.667zm7.192-9.539c0 .73-.593 1.322-1.322 1.322-.73 0-1.322-.593-1.322-1.322 0-.73.593-1.322 1.322-1.322.73 0 1.322.593 1.322 1.322 1.322z" />
                      </svg>
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src={post.media_url}
                        alt={`Instagram post from ${post.timestamp}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <div>
                        <p className="text-sm">
                          <span className="font-semibold mr-2">
                            innatthepier
                          </span>
                          {expandedCaptions.has(post.id) ? (
                            <>
                              {post.caption}
                              <button
                                className="text-gray-500 hover:text-gray-700 ml-1"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setExpandedCaptions((prev) => {
                                    const newSet = new Set(prev);
                                    newSet.delete(post.id);
                                    return newSet;
                                  });
                                }}
                              >
                                see less
                              </button>
                            </>
                          ) : post.caption.length > 100 ? (
                            `${post.caption.substring(0, 100)}...`
                          ) : (
                            post.caption
                          )}
                          {post.caption.length > 100 &&
                            !expandedCaptions.has(post.id) && (
                              <button
                                className="text-gray-500 hover:text-gray-700 ml-1"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setExpandedCaptions(
                                    (prev) => new Set([...prev, post.id])
                                  );
                                }}
                              >
                                more
                              </button>
                            )}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InstaPanel;
