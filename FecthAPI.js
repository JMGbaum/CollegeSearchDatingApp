
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

    export function FetchAPI() {


        const [data, setdata] = useState({})
        const apiGet = () => {
            fetch("https://api.data.gov/ed/collegescorecard/v1/schools?api_key=28Elia3PahggRE0b0ynrGpWnBa5zid436ki7J0iE&fields=latest.school.name,latest.id,latest.school.city,latest.school.state,latest.school.school_url,latest.school.degrees_awarded.predominant,latest.school.ownership,latest.school.minority_serving.historically_black,latest.school.minority_serving.predominantly_black,latest.school.minority_serving.annh,latest.school.minority_serving.tribal,latest.school.minority_serving.aanipi,latest.school.minority_serving.hispanic,latest.school.minority_serving.nant,latest.school.men_only,latest.school.women_only,latest.school.religious_affiliation,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.cost.attendance.academic_year,latest.cost.tuition.in_state,latest.cost.tuition.out_of_state,latest.tuition.program_year,latest.student.size,latest.student.grad_students,latest.student.demographics.men,latest.student.demographics.women,latest.student.demographics.race_ethnicity.white,latest.student.demographics.race_ethnicity.black,latest.student.demographics.race_ethnicity.hispanic,latest.student.demographics.race_ethnicity.asian,latest.student.demographics.race_ethnicity.aian,latest.student.demographics.race_ethnicity.nhpi,latest.student.demographics.race_ethnicity.two_or_more,latest.student.demographics.race_ethnicity.non_resident_alien,latest.student.demographics.race_ethnicity.unknown,latest.student.demographics.race_ethnicity.white_non_hispanic,latest.student.demographics.race_ethnicity.black_non_hispanic,latest.student.demographics.race_ethnicity.asian_pacific_islander,latest.completion.completion_rate_4yr_150nt,latest.completion.completion_rate_less_than_4yr_150nt")
            .then((response)=> response.json())
            .then((json) => {
                console.log(json);
                setdata(json);
            });
    };
      
    useEffect(() => {
        apiGet();
        //effect
        return () => {
            cleanup
        }
    },[])
        
        return (
            /*<div>
                My API <br/>
                <button> onClick = {apiGet}Fecth API </button>
                <br />
                <pre>{JSON.stringify(data,null,2)}</pre>
                <div>
                    <ul>
                        {data.map(item =>
                            <li key= {item.id}>{item.userId}{item.title}</li>
                            )}
                    </ul>
                </div>
            </div>*/

            <View>
                <Text>
                    {JSON.stringify(data)}
                    
                </Text>
            </View>
        );
    }

 