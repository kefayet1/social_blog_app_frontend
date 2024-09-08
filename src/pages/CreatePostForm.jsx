import {
  Autocomplete,
  Button,
  Chip,
  Snackbar,
  Switch,
  TextField,
} from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Tiptap from "../components/TipTap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import BaseUrl from "../BaseUrl";
import { useNavigate } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
const CreatePostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    active: false,
    tags: [],
    date: dayjs(),
    article: "",
    thumbnail: "",
  });
  const navigate = useNavigate();

  const [geminiContent, setGeminiContent] = useState("");
  const [ tags, setTags ] = useState([]);
  // Fetch your API_KEY
  const API_KEY = "AIzaSyC1j47qYsuVEmXnSwu0BA20K1YY2EoEZOg";

  // Access your API key (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(API_KEY);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // form input handler
  const handleInputForm = (e) => {
    if (e.target.name === "active") {
      setFormData((prevData) => {
        return {
          ...prevData,
          [e.target.name]: !prevData.active,
        };
      });
      return;
    }

    if (e.target.id.split("-")[0] === "tags") {
      return setFormData((prevData) => {
        return {
          ...prevData,
          tags: [...prevData.tags, e.target.innerText],
        };
      });
    }

    return setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  // this handler will collect date
  const setPublishDate = (e) => {
    return setFormData((prevData) => {
      return {
        ...prevData,
        date: e,
      };
    });
  };

  // this handler will collect time
  const setPublishTime = (e) => {
    return setFormData((prevDate) => {
      return {
        ...prevDate,
        date: prevDate.date.hour(e.hour()).minute(e.minute).second(e.second),
      };
    });
  };

  // this lifting state up function. data is coming from tip tap components
  const handleArticleChange = (e) => {
    return setFormData((prevData) => {
      return {
        ...prevData,
        article: e,
      };
    });
  };

  // this handler will collect image
  const handleImage = (e) => {
    return setFormData((prevData) => {
      return {
        ...prevData,
        thumbnail: e.target.files[0],
      };
    });
  };

  // submit from to the server
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const newFormData = new FormData();
    newFormData.append("title", formData.title);
    newFormData.append("active", formData.active);
    newFormData.append("tags", JSON.stringify(formData.tags));
    newFormData.append("published_at", formData.date);
    newFormData.append("body", formData.article);
    newFormData.append("thumbnail", formData.thumbnail); 
    newFormData.append(
      "token",
      JSON.parse(localStorage.getItem("loginInfo")).token
    );

    newFormData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    const response = await fetch(BaseUrl + "create_post", {
      method: "POST",
      body: newFormData,
    });
    const data = await response.json();
    console.log(data);
    if (data.status === "success") {
      <Snackbar open={open} autoHideDuration={6000} message={data.message} />;
      navigate("/");
    }
  };

  //this fun will handle gemini related functionality
  const handleGenerateText = async (prompt) => {
    try {
      const result = await model.generateContent(
        `${prompt}, ${formData.article}`
      );
      const response = await result.response;
      const text = response.text();

      setGeminiContent(text);
      setFormData((prevData) => {
        return {
          ...prevData,
          article: text,
        };
      });
    } catch (error) {
      console.error(error);
    }
  };

  // fetching tags from serve for tags input selector
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(BaseUrl + "get_tags", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: JSON.parse(localStorage.getItem("loginInfo")).token,
          }),
        });
        const data = await response.json();
        setTags(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTags();
  }, []);

  console.log(formData);
  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-5">
                  <form onSubmit={handleSubmitForm}>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="full_name">Title</label>
                        <input
                          type="text"
                          name="title"
                          id="full_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.title}
                          onChange={handleInputForm}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <p>Active</p>
                        <Switch
                          onChange={handleInputForm}
                          // {...label}
                          // checked={Boolean(formData.active)}
                          color="warning"
                          name="active"
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label htmlFor="email">Tags</label>
                        <Autocomplete
                          multiple
                          id="tags-standard"
                          options={tags}
                          getOptionLabel={(option) => option.title}
                          onChange={handleInputForm}
                          name="tags"
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="standard"
                              placeholder="add tags"
                            />
                          )}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <p>Publish Date</p>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            defaultValue={dayjs()}
                            name="publishDate"
                            onChange={setPublishDate}
                          />
                        </LocalizationProvider>
                      </div>

                      <div className="md:col-span-2">
                        <p>Publish Time</p>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <TimePicker
                            defaultValue={dayjs()}
                            onChange={setPublishTime}
                          />
                        </LocalizationProvider>
                      </div>

                      <div className="md:col-span-5">
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                          Article
                        </h6>
                        <div className="flex flex-wrap">
                          <div className="w-full  px-4">
                            <div className="relative w-full mb-3 TiPTap">
                              <Tiptap
                                handleArticleChange={handleArticleChange}
                                body={formData.article}
                                geminiContent={geminiContent}
                                handleGenerateText={handleGenerateText}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-5">
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                          Thumbnail
                        </h6>
                        <div className="flex h-[300px] overflow-hidden  align-center justify-center flex-wrap relative inline-block">
                          <div className="">
                            {formData.thumbnail && (
                              <img
                                type="file"
                                src={URL.createObjectURL(formData.thumbnail)}
                                alt=""
                                accept="image/*"
                                className="h-1/3 w-full object-cover"
                              />
                            )}
                            <div className="px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="mb-3 flex justify-center align-center ">
                                <Button
                                  component="label"
                                  role={undefined}
                                  variant="contained"
                                  tabIndex={-1}
                                  startIcon={<FontAwesomeIcon icon={faFile} />}
                                >
                                  Upload File
                                  <input
                                    name="thumbnail"
                                    onChange={handleImage}
                                    type="file"
                                    accept="image/*"
                                    hidden
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePostForm;
