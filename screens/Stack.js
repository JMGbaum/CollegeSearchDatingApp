import {Card} from "../components/";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

export const Stack = () => {
    const [data, setdata] = useState(null);
    const [index, setIndex] = useState(0);
    const apiGet = () => {
        fetch("https://api.data.gov/ed/collegescorecard/v1/schools?api_key=28Elia3PahggRE0b0ynrGpWnBa5zid436ki7J0iE&fields=latest.school.name,latest.id,latest.school.city,latest.school.state,latest.school.school_url,latest.school.degrees_awarded.predominant,latest.school.ownership,latest.school.minority_serving.historically_black,latest.school.minority_serving.predominantly_black,latest.school.minority_serving.annh,latest.school.minority_serving.tribal,latest.school.minority_serving.aanipi,latest.school.minority_serving.hispanic,latest.school.minority_serving.nant,latest.school.men_only,latest.school.women_only,latest.school.religious_affiliation,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.cost.attendance.academic_year,latest.cost.tuition.in_state,latest.cost.tuition.out_of_state,latest.tuition.program_year,latest.student.size,latest.student.grad_students,latest.student.demographics.men,latest.student.demographics.women,latest.student.demographics.race_ethnicity.white,latest.student.demographics.race_ethnicity.black,latest.student.demographics.race_ethnicity.hispanic,latest.student.demographics.race_ethnicity.asian,latest.student.demographics.race_ethnicity.aian,latest.student.demographics.race_ethnicity.nhpi,latest.student.demographics.race_ethnicity.two_or_more,latest.student.demographics.race_ethnicity.non_resident_alien,latest.student.demographics.race_ethnicity.unknown,latest.student.demographics.race_ethnicity.white_non_hispanic,latest.student.demographics.race_ethnicity.black_non_hispanic,latest.student.demographics.race_ethnicity.asian_pacific_islander,latest.completion.completion_rate_4yr_150nt,latest.completion.completion_rate_less_than_4yr_150nt")
        .then((response)=> response.json())
        .then((json) => {
            setdata(json);
        });
    };

    const pieChartData = {
        title: "Student Body Gender Disparity",
        data:[
            {
                name:"Male",
                value:data && data.results[index]["latest.student.demographics.men"] ? data.results[index]["latest.student.demographics.men"] : 0,
                color:"#8ce0ed"
            },
            {
                name:"Female",
                value:data && data.results[index]["latest.student.demographics.women"] ? data.results[index]["latest.student.demographics.women"] : 0,
                color:"#ffd1fb"
            },
            {
                name:"Other",
                value:data ? 1-data.results[index]["latest.student.demographics.women"]-data.results[index]["latest.student.demographics.men"] : 0,
                color:"#bdffbd"
            },
        ]
    }

    const RaceData = {
        title:"Student Body Racial and Ethnic Breakdown",
        data: [
          {
            name: "American Indian/Alaska Native",
            value: data && data.results[index]["latest.student.demographics.race_ethnicity.aian"] ? data.results[index]["latest.student.demographics.race_ethnicity.aian"]*100 : 0,
            color: '#dc143c'
          },
          {
            name: "Asian",
            value: data && data.results[index]["latest.student.demographics.race_ethnicity.asian"] ? data.results[index]["latest.student.demographics.race_ethnicity.asian"]*100 : 0,
            color: '#ff7f50'
          },
          {
            name: "Asian Pacific Islander",
            value: data && data.results[index]["latest.student.demographics.race_ethnicity.asian_pacific"] ? data.results[index]["latest.student.demographics.race_ethnicity.asian_pacific"]*100 : 0,
            color: '#ff8c00'
          },
          {
            name: "Black",
            value: data && data.results[index]["latest.student.demographics.race_ethnicity.black"] ? data.results[index]["latest.student.demographics.race_ethnicity.black"]*100 : 0,
            color: '#ffd700'
          },
          {
            name: "Black Non-Hispanic",
            value: data && data.results[index]["latest.student.demographics.race_ethnicity.black_non_hispanic"] ? data.results[index]["latest.student.demographics.race_ethnicity.black_non_hispanic"]*100 : 0,
            color: '#7cfc00'
          },
          {
            name: "Hispanic",
            value: data && data.results[index]["latest.student.demographics.race_ethnicity.hispanic"] ? data.results[index]["latest.student.demographics.race_ethnicity.hispanic"]*100 : 0,
            color: '#008000'
          },
          {
            name: "Native Hawaiian/Pacific Islander",
            value: data && data.results[index]["latest.student.demographics.race_ethnicity.nhpi"] ? data.results[index]["latest.student.demographics.race_ethnicity.nhpi"]*100 : 0,
            color: '#00ffff'
          },
          {
            name: "Non-Resident Alien",
            value: data && data.results[index]["latest.student.demographics.race_ethnicity.non_resident_alien"] ? data.results[index]["latest.student.demographics.race_ethnicity.non_resident_alien"]*100 : 0,
            color: '#00008b'
          },
          {
            name: "Mixed Race",
            value: data && data.results[index]["latest.student.demographics.race_ethnicity.two_or_more"] ? data.results[index]["latest.student.demographics.race_ethnicity.two_or_more"]*100 : 0,
            color: '#9932cc'
          },
          {
            name: "Unknown",
            value: data && data.results[index]["latest.student.demographics.race_ethnicity.unknown"] ? data.results[index]["latest.student.demographics.race_ethnicity.unknown"]*100 : 0,
            color: '#4b0082'
          },
          {
            name: "White",
            value: data && data.results[index]["latest.student.demographics.race_ethnicity.white"] ? data.results[index]["latest.student.demographics.race_ethnicity.white"]*100 : 0,
            color: '#ff00ff'
          },
          {
            name: "White Non-Hispanic",
            value: data && data.results[index]["latest.student.demographics.race_ethnicity.white_non_hispanic"] ? data.results[index]["latest.student.demographics.race_ethnicity.white_non_hispanic"]*100 : 0,
            color: '#c0c0c0'
          }
        ]
    }

    const religionKey = {
      "-1": "Not reported",
    "-2": "Not applicable",
    "22": "American Evangelical Lutheran Church",
    "24": "African Methodist Episcopal Zion Church",
    "27": "Assemblies of God Church",
    "28": "Brethren Church",
    "30": "Roman Catholic",
    "33": "Wisconsin Evangelical Lutheran Synod",
    "34": "Christ and Missionary Alliance Church",
    "35": "Christian Reformed Church",
    "36": "Evangelical Congregational Church",
    "37": "Evangelical Covenant Church of America",
    "38": "Evangelical Free Church of America",
    "39": "Evangelical Lutheran Church",
    "40": "International United Pentecostal Church",
    "41": "Free Will Baptist Church",
    "42": "Interdenominational",
    "43": "Mennonite Brethren Church",
    "44": "Moravian Church",
    "45": "North American Baptist",
    "47": "Pentecostal Holiness Church",
    "48": "Christian Churches and Churches of Christ",
    "49": "Reformed Church in America",
    "50": "Episcopal Church, Reformed",
    "51": "African Methodist Episcopal",
    "52": "American Baptist",
    "53": "American Lutheran",
    "54": "Baptist",
    "55": "Christian Methodist Episcopal",
    "57": "Church of God",
    "58": "Church of Brethren",
    "59": "Church of the Nazarene",
    "60": "Cumberland Presbyterian",
    "61": "Christian Church (Disciples of Christ)",
    "64": "Free Methodist",
    "65": "Friends",
    "66": "Presbyterian Church (USA)",
    "67": "Lutheran Church in America",
    "68": "Lutheran Church - Missouri Synod",
    "69": "Mennonite Church",
    "71": "United Methodist",
    "73": "Protestant Episcopal",
    "74": "Churches of Christ",
    "75": "Southern Baptist",
    "76": "United Church of Christ",
    "77": "Protestant, not specified",
    "78": "Multiple Protestant Denomination",
    "79": "Other Protestant",
    "80": "Jewish",
    "81": "Reformed Presbyterian Church",
    "84": "United Brethren Church",
    "87": "Missionary Church Inc",
    "88": "Undenominational",
    "89": "Wesleyan",
    "91": "Greek Orthodox",
    "92": "Russian Orthodox",
    "93": "Unitarian Universalist",
    "94": "Latter Day Saints (Mormon Church)",
    "95": "Seventh Day Adventists",
    "97": "The Presbyterian Church in America",
    "99": "Other (none of the above)",
    "100": "Original Free Will Baptist",
    "101": "Ecumenical Christian",
    "102": "Evangelical Christian",
    "103": "Presbyterian",
    "105": "General Baptist",
    "106": "Muslim",
    "107": "Plymouth Brethren",
    "null": "None"
    }
      
    useEffect(() => {
        apiGet();
        //effect
        return () => {
            //cleanup
        }
    },[])

    function updateIndex()
    {
      if (index < data.results.length - 1) setIndex(index + 1)
      else setIndex(0);
    }

    return (
       <View style={{alignItems:"center", zIndex:10}}>
         <Card data={pieChartData} racedata={RaceData} zIndex={3} press={updateIndex}
          title={data && data.results[index]["latest.school.name"] ? data.results[index]["latest.school.name"] : null}
          image="https://muhlenberg.edu/media/contentassets/images/homepage/Haas-Homepage1.jpg" 
          location={(data && data.results[index]["latest.school.city"] ? data.results[index]["latest.school.city"] : null)+", "+(data && data.results[index]["latest.school.state"] ? data.results[index]["latest.school.state"] : null)}
          admission_rate = {data && data.results[index]["latest.admissions.admission_rate.overall"] ? data.results[index]["latest.admissions.admission_rate.overall"] : null}
          satscores={data && data.results[index]["latest.admissions.sat_scores.average.overall"] ? data.results[index]["latest.admissions.sat_scores.average.overall"] : null}
          completionrate={data && data.results[index]["latest.completion_rate_4yr_150nt"] ? data.results[index]["latest.completion_rate_4yr_150nt"] : null}
          cost={data && data.results[index]["latest.cost.attendance.academic_year"] ? data.results[index]["latest.cost.attendance.academic_year"] : null}
          costinstate={data && data.results[index]["latest.cost.tuition.in_state"] ? data.results[index]["latest.cost.tuition.in_state"] : null}
          costoutstate={data && data.results[index]["latest.cost.tuition.out_of_state"] ? data.results[index]["latest.cost.tuition.out_of_state"] : null}
          menonly={data && data.results[index]["latest.school.men_only"] ? data.results[index]["latest.school.men_only"] : null}
          aanipi={data && data.results[index]["latest.school.minority_serving.aanipi"] ? data.results[index]["latest.school.minority_serving.aanipi"] : null}
          annh={data && data.results[index]["latest.school.minority_serving.annh"] ? data.results[index]["latest.school.minority_serving.annh"] : null}
          hispanic={data && data.results[index]["latest.school.minority_serving.hispanic"] ? data.results[index]["latest.school.minority_serving.hispanic"] : null}
          historicallyblack={data && data.results[index]["latest.school.minority_serving.historically_black"] ? data.results[index]["latest.school.minority_serving.historically_black"] : null}
          nant={data && data.results[index]["latest.school.minority_serving.nant"] ? data.results[index]["latest.school.minority_serving.nant"] : null}
          predominantlyblack={data && data.results[index]["latest.school.minority_serving.predominantly_black"] ? data.results[index]["latest.school.minority_serving.predominantly_black"] : null}
          tribal={data && data.results[index]["latest.school.minority_serving.tribal"] ? data.results[index]["latest.school.minority_serving.tribal"] : null}
          owner={data && data.results[index]["latest.school.ownership"] ? data.results[index]["latest.school.ownership"] : null}
          religion={data ? religionKey[String(data.results[index]["latest.school.religious_affiliation"])] : null}
          womenonly={data && data.results[index]["latest.school.women_only"] ? data.results[index]["latest.school.women_only"] : null}
          demomen={data && data.results[index]["latest.student.demographics.men"] ? data.results[index]["latest.student.demographics.men"] : null}
          demowomen={data && data.results[index]["latest.student.demographics.women"] ? data.results[index]["latest.student.demographics.women"] : null}
          aianr={data && data.results[index]["latest.student.demographics.race_ethnicity.aian"] ? data.results[index]["latest.student.demographics.race_ethnicity.aian"] : null}
          asianr={data && data.results[index]["latest.student.demographics.race_ethnicity.asian"] ? data.results[index]["latest.student.demographics.race_ethnicity.asian"] : null}
          asianpacificr={data && data.results[index]["latest.student.demographics.race_ethnicity.asian_pacific"] ? data.results[index]["latest.student.demographics.race_ethnicity.asian_pacific"] : null}
          blackr={data && data.results[index]["latest.student.demographics.race_ethnicity.black"] ? data.results[index]["latest.student.demographics.race_ethnicity.black"] : null}
          blacknonhispanicr={data && data.results[index]["latest.student.demographics.race_ethnicity.black_non_hispanic"] ? data.results[index]["latest.student.demographics.race_ethnicity.black_non_hispanic"] : null}
          hispanicr={data && data.results[index]["latest.student.demographics.race_ethnicity.hispanic"] ? data.results[index]["latest.student.demographics.race_ethnicity.hispanic"] : null}
          nhpir={data && data.results[index]["latest.student.demographics.race_ethnicity.nhpi"] ? data.results[index]["latest.student.demographics.race_ethnicity.nhpi"] : null}
          nonresidentr={data && data.results[index]["latest.student.demographics.race_ethnicity.non_resident_alien"] ? data.results[index]["latest.student.demographics.race_ethnicity.non_resident_alien"] : null}
          twormorer={data && data.results[index]["latest.student.demographics.race_ethnicity.two_or_more"] ? data.results[index]["latest.student.demographics.race_ethnicity.two_or_more"] : null}
          unknownr={data && data.results[index]["latest.student.demographics.race_ethnicity.unknown"] ? data.results[index]["latest.student.demographics.race_ethnicity.unknown"] : null}
          whiter={data && data.results[index]["latest.student.demographics.race_ethnicity.white"] ? data.results[index]["latest.student.demographics.race_ethnicity.white"] : null}
          whitenonhispanicr={data && data.results[index]["latest.student.demographics.race_ethnicity.white_non_hispanic"] ? data.results[index]["latest.student.demographics.race_ethnicity.white_non_hispanic"] : null}
          gradstudent={data && data.results[index]["latest.student.grad_students"] ? data.results[index]["latest.student.grad_students"] : null}
          studentsize={data && data.results[index]["latest.student.size"] ? data.results[index]["latest.student.size"] : null}
          degreesawarded={data && data.results[index]["latest.school.degrees_awarded.predominant"] ? data.results[index]["latest.school.degrees_awarded.predominant"] : null
          }/>
         {/*<Card data={pieChartData} zIndex={2} style={{position:"absolute", alignSelf:"center", top:"2%", left:"2%"}}/>*/}
         
         
       </View>
    )
}