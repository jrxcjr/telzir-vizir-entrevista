import TableDisplayResults from './TableDisplayResults'
import Container from 'react-bootstrap/Container'


function RenderMyFormResult (computedData,totalCost,totalCostWithPlan) {
    return(
    <div className="resultsContainer">
    <Container>
     <TableDisplayResults
      FirstGroup={computedData.callOrigin}
      SecondGroup={computedData.callDestination}
      ThirdGroup={computedData.minutes}
      FourthGroup={computedData.faleMaisPlan}
      FifthGroup={totalCost}
      SixthGroup={totalCostWithPlan}
      SeventhGroup={computedData.faleMaisPlan}
     ></TableDisplayResults>
    </Container>
   </div>)
}


export default RenderMyFormResult;