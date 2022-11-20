import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Jakub Bogdański"
            body={
                <>
                    <p>
                        <strong>Cześć, jestem Kuba!</strong> Interesuje się muzyką, sportem oraz elektroniką. Przez 12 lat grałem na trąbce w orkiestrze dętej. Repertuar, który graliśmy zaczynał się od muzyki klasycznej poprzez swing aż na muzyce popularnej kończąc. Bardzo lubię grać w piłkę nożną oraz kibicować swojej ubulinej drużynie, czyli FC Barcelonie. Interesuje się elektroniką oraz możliwościami jakie ona daje. Hobbistycznie programuję układy scalone oraz mikroukłady takie jak Raspberry Pi i Arduino.
                    </p>
                    <p>
                        Jestem tu aby porządnie nauczyć się JS oraz w przyszłości się przebranżowić.
                    </p>
                </>
            }
            />
    </Container>
);