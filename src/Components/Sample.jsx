import React, { useEffect, useState } from 'react';

const Sample = () => {
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    // Your HTML snippet
    const html = `<option value="">Select From Station</option>
    <option value="4148">ABANPOLA</option><option value="7250">AGPOPURA</option>
    <option value="8136">AHANGAMA</option><option value="8090">AKURALA</option>
    <option value="1064">ALAWWA</option><option value="3025">ALAWWATUPIYIYA</option>
    <option value="8062">ALUTHGAMA</option><option value="8085">AMBALANGODA</option>
    <option value="1054">AMBEPUSSA</option><option value="1220">AMBEWELA</option>
    <option value="3097">ANAVILUNDAWA</option><option value="8018">ANGULANA</option>
    <option value="4200">ANU.NEW TOWN</option><option value="4203">ANURA'PURA</option>
    <option value="3094">ARACHIKATTUWA</option><option value="8076">AUNGALLA</option>
    <option value="9059">AVISSAWELLA</option><option value="6174">AWUKANA</option>
    <option value="1290">BADULLA</option><option value="1099">BALANA</option>
    <option value="8080">BALAPITIYA</option><option value="8007">BAMBALAPITIYA</option>
    <option value="1257">BANDARAWELA</option><option value="3090">BANGADENIYA</option>
    <option value="9002">BASE LINE</option><option value="6348">BATICALOA</option>
    <option value="3100">BATTULUOYA</option><option value="1017">BATUWATTA</option>
    <option value="1030">BEMMULLA</option><option value="8063">BENTOTA</option>
    <option value="8056">BERUWALA</option><option value="3047">BOLAWATTA</option>
    <option value="8108">BOOSHA</option><option value="3049">BORALESSA</option>
    <option value="1053">BOTALE</option><option value="1060">BUJJOMUWA</option>
    <option value="1019">BULUGAHAGODA</option><option value="3091">CHILAW</option>
    <option value="7288">CHINA BAY</option><option value="9004">COTTA ROAD</option>
    <option value="1028">DARALUWA</option><option value="8012">DEHIWAL</option>
    <option value="1002">DEMATAGODA</option><option value="1276">DEMODARA</option>
    <option value="6328">DEVAPURAM</option><option value="1251">DIYATALAWA</option>
    <option value="8103">DODANDUWA</option><option value="8024">EGODA UYANA</option>
    <option value="1270">ELLA</option><option value="1010">ENDERAMULLA</option>
    <option value="4247">ERATTAPRIYAKULAM</option><option value="6335">ERAVUR</option>
    <option value="8000">FORT</option><option value="6225">GAL OYA</option>
    <option value="1151">GALABADA</option><option value="4159">GALGAMUWA</option>
    <option value="8116">GALLE</option><option value="6262">GALLELLA</option>
    <option value="1026">GAMPAHA</option><option value="1125">GAMPOLA</option>
    <option value="1044">GANEGODA</option><option value="1021">GANEMULLA</option>
    <option value="4115">GANEWATTA</option><option value="1092">GANGODA</option>
    <option value="1118">GELIOYA</option><option value="8110">GINTOTATA</option>
    <option value="4078">GIRAMBE</option><option value="9028">GODAGAMA</option>
    <option value="1197">GREAT WESTERN</option><option value="8129">HABARADUWA</option>
    <option value="6208">HABARANA</option><option value="1285">HALI ELA</option>
    <option value="1246">HAPUTALE</option><option value="6221">HATARESKOTUWA</option>
    <option value="1173">HATTON</option><option value="1263">HEEL OYA</option>
    <option value="1034">HENDENIYAP GODA</option><option value="8058">HETTIMULLA</option>
    <option value="8097">HIKKADUWA</option><option value="6242">HINRAKGODA</option>
    <option value="4122">HIRIYALA</option><option value="9022">HOMA HOS ROAD</option><option value="9025">HOMAGAMA</option><option value="1012">HORAPE</option><option value="6197">HORIWILA</option><option value="1008">HUNUPITIYA</option><option value="1239">IDAL GASHINNA</option><option value="1161">IHALA WATAWALA</option><option value="1094">IHALAKOTTE</option><option value="8067">INDURUWA</option><option value="1145">INGURUOYA</option><option value="3020">JA ELA</option><option value="6247">JAYANTIPURAM</option><option value="6314">KADADASI NAGAR</option><option value="1088">KADIGAMUWA</option><option value="1104">KADUGANNAWA</option><option value="8091">KAHAWE</option><option value="3075">KAKKAPALLIA</option><option value="6177">KALAWEWA</option><option value="6320">KALKUDAH</option><option value="8042">KALU NORTH</option><option value="8044">KALU SOUTH</option><option value="8153">KAMBURUGGAMUWA</option><option value="3017">KANDANA</option><option value="8083">KANDEGODA</option><option value="2119">KANDY</option><option value="7254">KANTALE</option><option value="3019">KAPUWATTA</option><option value="8133">KATALUWA</option><option value="3040">KATTUWA</option><option value="2124">KATUGASTOOTA</option><option value="8120">KATUGODA</option><option value="8047">KATUKURURNDA</option><option value="3031">KATUNAYAKA</option><option value="1040">KEENAWALA</option><option value="6187">KEKIRAWA</option><option value="1005">KELANIYA</option><option value="1260">KINIGAMA</option><option value="9007">KIRULPONE</option><option value="1268">KITAL ELLA</option><option value="8131">KOGGALA</option><option value="3043">KOICHCHIKADE</option><option value="8005">KOLPETTI</option><option value="8004">KOMPANNAVIDIYA</option><option value="6147">KON WEWA</option><option value="8023">KORALAWEELA</option><option value="9049">KOSGAMA</option><option value="8073">KOSGODA</option><option value="1115">KOSHINNA</option><option value="1178">KOTAGALA</option><option value="9019">KOTTAWA</option><option value="3023">KUDAHAKAPALA</option><option value="3066">KUDAWEW</option><option value="8101">KUMARAKANDA</option><option value="8142">KUMBALGAMA</option><option value="3033">KURANA</option><option value="4093">KURUNEGALA</option><option value="6250">LAKSHA UYANA</option><option value="3028">LIYAAGE MULLA</option><option value="8019">LUNAWA</option><option value="3052">LUNUWILA</option><option value="8088">MADAMPAGAMA</option><option value="3070">MADAMPPE</option><option value="3120">MADURANKULIYA</option><option value="1032">MAGALEGODA</option><option value="8053">MAGGONA</option><option value="8070">MAHA INDURUWA</option><option value="9014">MAHARAGAMA</option><option value="2121">MAHAYYAWA</option><option value="4137">MAHO</option><option value="9021">MALAPALLA</option><option value="6268">MANAMPITIYA</option><option value="3115">MANGALAELIYA</option><option value="3087">MANUWANGAMA</option><option value="1000">MARADANA</option><option value="2147">MATALE</option><option value="8159">MATARA</option><option value="4219">MEDAGAMA</option><option value="4229">MEDAVACHCHI</option><option value="9030">MEEGODA</option><option value="8140">MIDIGAMA</option><option value="4205">MIHIN JUNCTION</option><option value="6234">MINNERIYA</option><option value="1048">MIRIGAMA</option><option value="8149">MIRISSA</option><option value="7267">MOLLIPOTANA</option><option value="6158">MORAGOLLAGAMA</option><option value="8021">MORATUWA</option><option value="8014">MOUNT LAVINIA</option><option value="3108">MUNDAL</option><option value="4096">MUTTUGALA</option><option value="4127">NAGOLLAGAMA</option><option value="4089">NAILIYA</option><option value="1205">NANU OYA</option><option value="9006">NARAHENPITA</option><option value="3060">NATHTHANDIYA</option><option value="1140">NAVALAPITIYA</option><option value="9013">NAWINNA</option><option value="6170">NEEGAMA</option><option value="3037">NEGOMBO</option><option value="3069">NELUMPOKUNA</option><option value="9009">NUGEGODA</option><option value="1230">OHIYA</option><option value="9035">PADUKKA</option><option value="3129">PALAVI</option><option value="1042">PALLEWELA</option><option value="6201">PALUGASWEWA</option><option value="8028">PANADURA</option><option value="9026">PANAGODA</option><option value="1076">PANALIYA</option><option value="9017">PANNIPITIYA</option><option value="1210">PARAKUMPURA</option><option value="4216">PARASANGAHWEWA</option><option value="2136">PATANPAHA</option><option value="8078">PATEGAMGODA</option><option value="1223">PATTIPOA</option><option value="8050">PAYA NORTH</option><option value="8051">PAYA SOUTH</option><option value="1113">PERADENIA</option><option value="3015">PERALANDA</option><option value="6253">PERKUM UYANA</option><option value="8160">PILADUWA</option><option value="1108">PILIMATALAWA</option><option value="9040">PINNAWALA</option><option value="8031">PINWATTA</option><option value="8112">PIYADIGAMA</option><option value="8074">PIYAGAMA</option><option value="8148">POLATHU MODAERA</option><option value="1072">POLGAHGAWELA</option><option value="6258">POLONNARUWA</option><option value="6300">POONANI</option><option value="4236">POONEWA</option><option value="4084">POTUHERA</option><option value="3106">PULICHCHAKULAMA</option><option value="3133">PUTTALAM</option><option value="9056">PUWAKPITIYA</option><option value="1201">RADELLA</option><option value="1014">RAGAMA</option><option value="1083">RAMBUKKANA</option><option value="6154">RANAMUKGAMA</option><option value="4140">RANDENIGAMA</option><option value="8104">RATGAMA</option><option value="8016">RATMALANA</option><option value="8113">RICHMAND HILL</option><option value="1166">ROZELLA</option><option value="4209">SALIYAPURA</option><option value="2114">SARASAVI UYANA</option><option value="3078">SAWARANA</option><option value="8003">SECARATARIAT HOALT</option><option value="3026">SEEDUWA</option><option value="8095">SEENIGAMA</option><option value="4168">SENARATHGAMA</option><option value="6164">SIYABALANGAMUWA</option><option value="4197">SRIWASTIPURA</option><option value="4188">TALAWA</option><option value="1186">TALAWAKELE</option><option value="4079">TALAWATTEGEDARA</option><option value="8126">TALPE</option><option value="1129">TAMBILIGALA</option><option value="4177">TAMBUTTEGAMA</option><option value="7273">TANBALAGAMUWA</option><option value="8093">TELWATTA</option><option value="3132">TILADIYA</option><option value="4131">TIMBIRIYAGEDARA</option><option value="1077">TISMALPOLA</option><option value="8038">TRAIN HOLT</option><option value="7295">TRINCO</option><option value="3022">TUDEELLA</option><option value="3057">TUMMODARA</option><option value="9012">UDAHAMULLA</option><option value="2127">UDATALAWINNA</option><option value="2140">UDATTAWELA</option><option value="1281">UDUWARA</option><option value="2141">UKUWELA</option><option value="1132">ULAPANE</option><option value="8121">UNAWATUNA</option><option value="6317">VALACHCHENNAI</option><option value="4252">VAUNIA</option><option value="1036">VEYANGODA</option><option value="8034">WADDUWA</option><option value="9044">WAGGA</option><option value="3045">WAIKKALA</option><option value="3063">WALAHAPITIYA</option><option value="1068">WALAKUMBURA</option><option value="8156">WALGAMA</option><option value="1016">WALPOLA</option><option value="1007">WANAWASALA</option><option value="1037">WANDURAWA</option><option value="1192">WATAGODA</option><option value="9034">WATAREKA PLATFORM</option><option value="1160">WATAWALA</option><option value="2131">WATTEGAMA</option><option value="8143">WELIGAMA</option><option value="6284">WELIKANDA</option><option value="4103">WELLAWA</option><option value="8009">WELLAWATTA</option><option value="1047">WIJAYARAJADAHANA</option><option value="1050">WILWATTA</option><option value="1022">YAGODA</option><option value="1081">YATAGAMA</option><option value="1058">YATHTHALGODA</option>
  `; // Your HTML snippet continues

    // Parsing the HTML snippet
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const options = doc.querySelectorAll('option');

    // Filtering options that start with '4'
    const filtered = Array.from(options).filter(option => option.value.startsWith('9'));

    // Storing filtered options in state
    setFilteredOptions(filtered);
  }, []); // Run once on component mount

  return (
    <div className='text=black'>
      <h2>Filtered Options:</h2>
      <select>
        {filteredOptions.map(option => (
          <option key={option.value} value={option.value}>{option.textContent} ({option.value})</option>
        ))}
      </select>
    </div>
  );
};

export default Sample;
