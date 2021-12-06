import {Card} from "../components/";
import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image,Dimensions } from "react-native";

export const Stack = () => {
  const [data, setdata] = useState(null);
        const apiGet = () => {
            fetch("https://api.data.gov/ed/collegescorecard/v1/schools?api_key=28Elia3PahggRE0b0ynrGpWnBa5zid436ki7J0iE&fields=latest.school.name,latest.id,latest.school.city,latest.school.state,latest.school.school_url,latest.school.degrees_awarded.predominant,latest.school.ownership,latest.school.minority_serving.historically_black,latest.school.minority_serving.predominantly_black,latest.school.minority_serving.annh,latest.school.minority_serving.tribal,latest.school.minority_serving.aanipi,latest.school.minority_serving.hispanic,latest.school.minority_serving.nant,latest.school.men_only,latest.school.women_only,latest.school.religious_affiliation,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.cost.attendance.academic_year,latest.cost.tuition.in_state,latest.cost.tuition.out_of_state,latest.tuition.program_year,latest.student.size,latest.student.grad_students,latest.student.demographics.men,latest.student.demographics.women,latest.student.demographics.race_ethnicity.white,latest.student.demographics.race_ethnicity.black,latest.student.demographics.race_ethnicity.hispanic,latest.student.demographics.race_ethnicity.asian,latest.student.demographics.race_ethnicity.aian,latest.student.demographics.race_ethnicity.nhpi,latest.student.demographics.race_ethnicity.two_or_more,latest.student.demographics.race_ethnicity.non_resident_alien,latest.student.demographics.race_ethnicity.unknown,latest.student.demographics.race_ethnicity.white_non_hispanic,latest.student.demographics.race_ethnicity.black_non_hispanic,latest.student.demographics.race_ethnicity.asian_pacific_islander,latest.completion.completion_rate_4yr_150nt,latest.completion.completion_rate_less_than_4yr_150nt")
            .then((response)=> response.json())
            .then((json) => {
                console.log(json.results);
                setdata(json);
            });
    };
      
    useEffect(() => {
        apiGet();
        //effect
        return () => {
            //cleanup
        }
    },[])
    return (
       <View style={{alignItems:"center", zIndex:10}}>
         <Card data={pieChartData} zIndex={3} 
         title={data ? data.results[0]["latest.school.name"] : null}
          image="https://muhlenberg.edu/media/contentassets/images/homepage/Haas-Homepage1.jpg" 
          location={(data ? data.results[0]["latest.school.city"] : null)+", "+(data ? data.results[0]["latest.school.state"] : null)}
          admission_rate = {data ? data.results[0]["latest.admissions.admission_rate.overall"] : null}
          satscores={data ? data.results[0]["latest.admissions.sat_scores.average.overall"] : null}
          completionrate={data ? data.results[0]["latest.completion_rate_4yr_150nt"] : null}
          cost={data ? data.results[0]["latest.cost.attendance.academic_year"] : null}
          costinstate={data ? data.results[0]["latest.cost.tuition.in_state"] : null}
          costoutstate={data ? data.results[0]["latest.cost.tuition.out_of_state"] : null}
          menonly={data ? data.results[0]["latest.school.men_only"] : null}
          aanipi={data ? data.results[0]["latest.school.minority_serving.aanipi"] : null}
          annh={data ? data.results[0]["latest.school.minority_serving.annh"] : null}
          hispanic={data ? data.results[0]["latest.school.minority_serving.hispanic"] : null}
          historicallyblack={data ? data.results[0]["latest.school.minority_serving.historically_black"] : null}
          nant={data ? data.results[0]["latest.school.minority_serving.nant"] : null}
          predominantlyblack={data ? data.results[0]["latest.school.minority_serving.predominantly_black"] : null}
          tribal={data ? data.results[0]["latest.school.minority_serving.tribal"] : null}
          owner={data ? data.results[0]["latest.school.ownership"] : null}
          religion={data ? data.results[0]["latest.school.religious_affiliation"] : null}
          womenonly={data ? data.results[0]["latest.school.women_only"] : null}
          demomen={data ? data.results[0]["latest.student.demographics.men"] : null}
          demowomen={data ? data.results[0]["latest.student.demographics.women"] : null}
          aianr={data ? data.results[0]["latest.student.demographics.race_ethnicity.aian"] : null}
          asianr={data ? data.results[0]["latest.student.demographics.race_ethnicity.asian"] : null}
          asianpacificr={data ? data.results[0]["latest.student.demographics.race_ethnicity.asian_pacific"] : null}
          blackr={data ? data.results[0]["latest.student.demographics.race_ethnicity.black"] : null}
          blacknonhispanicr={data ? data.results[0]["latest.student.demographics.race_ethnicity.black_non_hispanic"] : null}
          hispanicr={data ? data.results[0]["latest.student.demographics.race_ethnicity.hispanic"] : null}
          nhpir={data ? data.results[0]["latest.student.demographics.race_ethnicity.nhpi"] : null}
          nonresidentr={data ? data.results[0]["latest.student.demographics.race_ethnicity.non_resident_alien"] : null}
          twormorer={data ? data.results[0]["latest.student.demographics.race_ethnicity.two_or_more"] : null}
          unknownr={data ? data.results[0]["latest.student.demographics.race_ethnicity.unknown"] : null}
          whiter={data ? data.results[0]["latest.student.demographics.race_ethnicity.white"] : null}
          whitenonhispanicr={data ? data.results[0]["latest.student.demographics.race_ethnicity.white_non_hispanic"] : null}
          gradstudent={data ? data.results[0]["latest.student.grad_students"] : null}
          studentsize={data ? data.results[0]["latest.student.size"] : null}
          degreesawarded={data ? data.results[0]["latest.school.degrees_awarded.predominant"] : null
          }/>
         {/*<Card data={pieChartData} zIndex={2} style={{position:"absolute", alignSelf:"center", top:"2%", left:"2%"}}/>*/}
         
         
       </View>
    )
}

const pieChartData = {
  title: "Student Body Gender Disparity",
  data:[
    {
      name:"Male",
      value:40,
      color:"#8ce0ed"
    },
    {
      name:"Female",
      value:50,
      color:"#ffd1fb"
    },
    {
      name:"Other",
      value:10,
      color:"#bdffbd"
    },
  ]
}

