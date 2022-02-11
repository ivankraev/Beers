export default function TxList({ txs }) {
    if (txs.length === 0) return null;

    return (
        <>
            <div className="alert alert-success mt-5">
                <div className="flex-1 justify-center" >
                    <label>Succesfull Payment</label>
                </div>
            </div>
        </>
    );
}