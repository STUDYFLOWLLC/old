const request = require("request-promise");
const cheerio = require("cheerio");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: "./output/cornellsp22.csv",
  header: [
    { id: "school", title: "School" },
    { id: "term", title: "Term" },
    { id: "code", title: "Code" },
    { id: "title", title: "Title" },
    { id: "instructor", title: "Instructor" },
  ],
});

const getAddresses = async (homeAddress, baseAddress) => {
  const addressArray = [];
  await request(homeAddress, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const addresses = $('[id^="brw-subj-descr"]');
      for (let i = 0; i < addresses.length; i++) {
        addressArray.push(
          "https://classes.cornell.edu" + addresses[i].attribs.href
        );
      }
    }
  });
  return addressArray;
};

const getDataFromAddress = async (address) => {
  const thisData = [];
  await request(address, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const codes = $(".title-subjectcode");
      const names = $(".title-coursedescr");
      const instructors = $(".instructors");
      for (let i = 0; i < codes.length; i++) {
        const thisClass = {
          school: "Cornell University",
          term: "SP22",
        };
        thisClass.code = codes[i].children[0].data;
        thisClass.title = names[i].children[0].children[0].data;
        thisClass.instructor = instructors[i].children[
          instructors[i].children.length - 1
        ].prev.children[0].attribs
          ? instructors[i].children[instructors[i].children.length - 1].prev
              .children[0].attribs["data-content"]
          : null;
        thisData.push(thisClass);
      }
    }
  });
  return thisData;
};

const scrape = async (homeAddress, baseAddress) => {
  let allAddresses;

  await Promise.resolve(getAddresses(homeAddress, baseAddress)).then(
    (value) => (allAddresses = value)
  );

  let allClasses = [];
  for (let i = 0; i < allAddresses.length; i++) {
    await Promise.resolve(getDataFromAddress(allAddresses[i])).then((value) => {
      allClasses = allClasses.concat(value);
    });
  }
  csvWriter.writeRecords(allClasses);
};

scrape(
  "https://classes.cornell.edu/browse/roster/SP22",
  "https://classes.cornell.edu"
);
